# Flight Path Visualization

A web application that visualizes a flight path from SFB to SPG to VNC and back, including media markers and points of interest along the route.

## Features

- Interactive Mapbox map with flight path visualization
- Media markers (photos and videos) along the route
- Text markers for points of interest
- Responsive design with floating information bubble
- Custom favicon and metadata

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your Mapbox token:
   ```
   VITE_MAPBOX_TOKEN=your_token_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/App.tsx` - Main application component
- `src/MediaMarker.ts` - Media marker data and types
- `src/TextMarker.ts` - Text marker data and types
- `public/` - Static assets including KML file, media files, and favicons

## Technologies Used

- React
- TypeScript
- Vite
- Mapbox GL JS
- KML to GeoJSON conversion

## Deployment

The application can be deployed to any static hosting service. For production builds:

```bash
npm run build
```

## License

MIT