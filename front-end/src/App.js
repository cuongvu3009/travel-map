import * as React from 'react';
import './app.css';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import RoomIcon from '@mui/icons-material/Room';
import StarIcon from '@mui/icons-material/Star';

function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  return (
    <div className='App'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        mapStyle='mapbox://styles/cuongvu3009/ckyk0o90q5nkp15pc0lnjq2ky'
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={48.858093}
          longitude={2.294694}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <RoomIcon style={{ fontSize: viewport.zoom * 7, color: 'red' }} />
        </Marker>
        <Popup
          latitude={48.858093}
          longitude={2.294694}
          closeButton={true}
          closeOnClick={false}
          anchor='bottom'
        >
          <div className='card'>
            <label>Place</label>
            <h4 className='place'>Eiffle tower</h4>
            <label>Review</label>
            <p className='desc'>Beautiful place. Love it</p>
            <label>Rating</label>
            <div className='stars'>
              <StarIcon className='star' />
              <StarIcon className='star' />
              <StarIcon className='star' />
              <StarIcon className='star' />
              <StarIcon className='star' />
            </div>
            <label>Information</label>
            <span className='username'>
              Created by <b>meo muop </b>
            </span>
            <span className='date'>6 mintues ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
