export interface TextMarker {
  title: string;
  description: string;
  coords: [number, number]; // [longitude, latitude]
}

export const textMarkers: TextMarker[] = [
  {
    title: "Lake Apopka",
    description: "Came close to the Lake",
    coords: [28.711017362029736, -81.48960068960571]
  },
  {
    title: "Downtown Orlando",
    description: "Disney Springs, Icon Park, Downtown",
    coords: [28.45020598675402, -81.4761653017362]
  },
  {
    title: "Tampa & Bridges",
    description: "Downtown Tampa, Took Bridge Route",
    coords: [27.964181327413, -82.58561494866073]
  },
  {
    title: "Touch and Go",
    description: "St. Petersburg, Albert Whitted Airport",
    coords: [27.764243664081512, -82.62498178854037]
  },
  {
    title: "Sunshine Skyway",
    description: "Sunshine Skyway Bridge, Tampa",
    coords: [27.62317887519899, -82.6572539763912]
  },
  {
    title: "Venice",
    description: "Touch and Go",
    coords: [27.07071320379912, -82.44067650179119]
  },
  {
    title: "Straight Path",
    description: "Request Direct to Sanford",
    coords: [27.71039978971957, -81.96241485915606]
  },
  {
    title: "Ascent",
    description: "Fly above Clouds",
    coords: [28.5074684328454, -81.79468309170474]
  },
  {
    title: "Tight Turns",
    description: "High Gs",
    coords: [28.447983572767747, -81.81360905646999]
  },
  {
    title: "0G Falls",
    description: "Low Gs",
    coords: [28.492216235273716, -81.83043526317718]
  },
  {
    title: "Fly into Cloud",
    description: "IFR Operations",
    coords: [28.61736180962116, -81.71217017074537]
  },
]; 