import React, { useState, useEffect } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';
import useSwr from 'swr';
import './App.css';

const URL = 'http://data.police.uk/api/crimes-street/all-crime?lat=52.62&lng=-1.13'

function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.62,
    longitude: -1.13,
    width: '100vw',
    height: '100vh',
    zoom: 12
  })
  const [crimes, setCrimes] = useState([])


  useEffect(() => {

    async function fetchData() {
      const resp = await fetch(URL)
      const data = await resp.json();
      if (data) {
        setCrimes(data.slice(0, 100))
      }
    }

    fetchData();

  }, [])

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
        onViewportChange={viewport => setViewport(viewport)}
      >
        {crimes.map(crime => (
          <Marker
            key={crime.id}
            latitude={parseFloat(crime.location.latitude)}
            longitude={parseFloat(crime.location.longitude)}>
            <button className='marker-btn'>
              <i className="material-icons">not_interested</i>
            </button>
          </Marker>
        ))}

      </ReactMapGL>
    </div>
  );
}

export default App;
