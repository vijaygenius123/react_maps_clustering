import React, { useState } from 'react';

import ReactMapGL from 'react-map-gl';
import useSwr from 'swr';
import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: '100vw',
    height: '100vh',
    zoom: 1
  })
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
      >

      </ReactMapGL>
    </div>
  );
}

export default App;
