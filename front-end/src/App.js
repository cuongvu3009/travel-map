import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default App;
