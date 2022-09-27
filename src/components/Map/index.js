import React, { useRef } from "react";
import Leaflet from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-control-geocoder";

import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

const Map = ({ children, center, zoom }) => {
  const mapRef = useRef();
  const containerStyle = {
    width: "100%",
    height: "100vh"
  }

  return (
    <MapContainer
      style={containerStyle}
      center={center}
      zoom={zoom}
      scrollWheelZoom={true}
      ref={mapRef}
    >
      {children}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;