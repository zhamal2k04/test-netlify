import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import australia from "../Icons/australia.png";
import { Icon } from "leaflet";
import "../IconStyles/IconStyle.css";

const Map = styled(MapContainer)`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border: 2px solid #716a7a;
`;

const LeafLet2 = () => {
  const australiaIcon = new Icon({
    iconUrl: australia,
    iconSize: [47, 45],
    className: "my-icon",
  });

  return (
    <div>
      <Map center={[-35.280937, 149.130005]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-35.280937, 149.130005]} icon={australiaIcon}>
          <Popup>
            <h1 style={{ textAlign: "center" }}>Australia</h1>
            <span style={{ color: "#112", textAlign: "center" }}>
              Designo AU Office
            </span>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default LeafLet2;
