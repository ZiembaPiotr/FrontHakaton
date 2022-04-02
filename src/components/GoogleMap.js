import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import {getResolution} from "../functions/getResolution";

const containerStyle = getResolution()

const center = {
  lat: 50.05,
  lng: 19.93
};

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey=process.env.API_KEY
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
