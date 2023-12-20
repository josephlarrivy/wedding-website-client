import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer
          center={[46.600420704108735, -91.57172569008635]}
      zoom={8}
      style={{ width: '100%', height: '400px', zIndex: '0' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
          <Marker position={[46.600420704108735, -91.57172569008635]}>
        <Popup>
          <p><b>Brule River Barn</b>
          <br></br>
          4492 S County Highway H
          <br></br>
          Brule, WI 54820</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;