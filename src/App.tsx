import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import * as toGeoJSON from '@tmcw/togeojson'
import { mediaMarkers } from './MediaMarker'
import { textMarkers } from './TextMarker'

import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css'

function App() {

  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-82.5, 27.8],
        zoom: 7,
      })
      mapRef.current = map

      // Load and parse the KML file
      fetch('/N123TJ-track-EGM96.kml')
        .then(res => res.text())
        .then(kmlText => {
          const parser = new DOMParser()
          const kml = parser.parseFromString(kmlText, 'text/xml')
          const geojson = toGeoJSON.kml(kml)
          
          geojson.features = geojson.features.filter(f => f.geometry !== null)

          // Now it's safe to cast f.geometry as Geometry
          geojson.features.forEach(feature => {
            if (feature.geometry && feature.geometry.type === 'LineString') {
              const lineString = feature.geometry as GeoJSON.LineString;
              const altitudes = lineString.coordinates.map(coord => coord[2] || 0);
              feature.properties = feature.properties || {};
              feature.properties.altitudes = altitudes;
            }
          })

          // Add GeoJSON as a source and a line layer
          map.on('load', () => {
            map.addSource('kml-path', {
              type: 'geojson',
              data: geojson as GeoJSON.FeatureCollection<GeoJSON.LineString, GeoJSON.GeoJsonProperties>,
            })
            map.addLayer({
              id: 'kml-path-layer',
              type: 'line',
              source: 'kml-path',
              paint: {
                'line-color': '#ff38cd',
                'line-width': 2,
              },
            })

            mediaMarkers.forEach(({ type, url, coords, orientation, thumbnail }) => {
              let el: HTMLElement;

              if (type === 'photo') {
                el = document.createElement('div');
                el.style.backgroundImage = `url(${url})`;
                el.style.backgroundSize = 'cover';
                el.style.borderRadius = '50%';
                el.style.width = '48px';
                el.style.height = '48px';
                el.style.zIndex = '1';
              } else {
                // Video marker: show thumbnail, play video on hover/click
                el = document.createElement('div');
                el.style.position = 'relative';
                el.style.width = orientation === 'portrait' ? '48px' : '64px';
                el.style.height = orientation === 'portrait' ? '64px' : '48px';
                el.style.borderRadius = '6px';
                el.style.overflow = 'hidden';
                el.style.background = `url(${thumbnail}) center/cover no-repeat`;
                el.style.zIndex = '1';

                // Create video element (hidden by default)
                const video = document.createElement('video');
                video.src = url;
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.display = 'none';
                video.muted = true;
                video.loop = true;
                el.appendChild(video);

                // Show video on hover, hide on leave
                el.addEventListener('mouseenter', () => {
                  el.style.background = 'none';
                  video.style.display = 'block';
                  video.play();
                });
                el.addEventListener('mouseleave', () => {
                  video.pause();
                  video.style.display = 'none';
                  el.style.background = `url(${thumbnail}) center/cover no-repeat`;
                });

                // Enable sound on click
                el.addEventListener('click', () => {
                  video.muted = false;
                  video.play();
                });
              }

              // Common hover effect for scaling and z-index
              el.addEventListener('mouseenter', () => {
                el.style.zIndex = '1000';
                if (orientation === 'portrait') {
                  el.style.width = '512px';
                  el.style.height = '683px';
                } else {
                  el.style.width = '683px';
                  el.style.height = '512px';
                }
                el.style.borderRadius = '18px';
              });
              el.addEventListener('mouseleave', () => {
                el.style.zIndex = '1';

                if (type === 'photo') {
                  el.style.width = '48px';
                  el.style.height = '48px';
                  el.style.borderRadius = '50%';
                } else {
                  el.style.width = orientation === 'portrait' ? '48px' : '64px';
                  el.style.height = orientation === 'portrait' ? '64px' : '48px';
                  el.style.borderRadius = '6px';
                }
              });

              new mapboxgl.Marker(el)
                .setLngLat([coords[1], coords[0]])
                .addTo(map);
            });

            // Add text markers
            textMarkers.forEach(({ title, description, coords }) => {
              const popup = new mapboxgl.Popup({ offset: 25 })
                .setHTML(`
                  <h3>${title}</h3>
                  <p>${description}</p>
                `);

              const marker = document.createElement('div');
              marker.className = 'text-marker';
              marker.style.width = '24px';
              marker.style.height = '24px';
              marker.style.backgroundColor = '#690af7';
              marker.style.borderRadius = '50%';
              marker.style.cursor = 'pointer';
              marker.style.zIndex = '0';

              new mapboxgl.Marker(marker)
                .setLngLat([coords[1], coords[0]])
                .setPopup(popup)
                .addTo(map);

              // Show popup on hover
              marker.addEventListener('mouseenter', () => {
                popup.addTo(map);
              });

              // Hide popup when mouse leaves
              marker.addEventListener('mouseleave', () => {
                popup.remove();
              });
            });
          })
        })

      return () => {
        map.remove()
      }
    }
  }, [])

  return (
    <>
      <div id='map-container' ref={mapContainerRef} style={{ width: '100vw', height: '100vh' }} />
      <div className="floating-bubble">
        <h1>Brandon, Jackson, Mav Flight</h1>
        <div className="bubble-subtitle">
          <span>May 1, 2025</span>
          <span>•</span>
          <span>Seminole Piper</span>
          <span>•</span>
          <span>N123TJ</span>
          <span>•</span>
          <span>SFB → SPG → VNC → SFB</span>
        </div>
      </div>
    </>
  )
}

export default App