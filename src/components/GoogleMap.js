
import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, useJsApiLoader} from '@react-google-maps/api';
import {getResolution} from "../functions/getResolution";

const containerStyle = getResolution()



const center = {
  lat: 50.05,
  lng: 19.93,
};


// const positions = [
//   {lat: 50.07, lng: 19.94},
//   {lat: 50.05, lng: 19.93},
// ];

const onLoad = marker => {
  console.log('marker: ', marker)
}

const Map = () => {
  const [positions, setPositions] = useState([
    {lat: 50.07, lng: 19.94},
    {lat: 50.05, lng: 19.93},
  ]);
  return (
    <LoadScript
      googleMapsApiKey=process.env.API_KEY
 

    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
      {/* <Marker
        onLoad={onLoad}
        position={position}
      /> */}
      {/* <Marker
      icon={{
        path:
          "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
        fillColor: "yellow",
        fillOpacity: 0.9,
        scale: 2,
        strokeColor: "gold",
        strokeWeight: 2,
      }}
      position={position}
    /> */}
    {positions.map(position => (
      <Marker
      icon={{
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      }}
      position={position}
      
      
    />
    ))}
    
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
