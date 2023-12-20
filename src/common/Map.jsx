import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet library
import 'leaflet/dist/leaflet.css';

// Import your custom marker icon
import customMarkerIcon from '../images/blue-square.png';

const Map = () => {
  // Create a custom icon instance
  const customIcon = new L.Icon({
    iconUrl: customMarkerIcon, // Path to your custom icon
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (centered, bottom)
    popupAnchor: [0, -32], // Anchor point for popups (top, centered)
  });

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
      {/* Use the Marker component with the custom icon */}
      <Marker position={[46.600420704108735, -91.57172569008635]} icon={customIcon}>
        <Popup>
          <p>
            <b>Brule River Barn</b>
            <br></br>
            4492 S County Highway H
            <br></br>
            Brule, WI 54820
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
