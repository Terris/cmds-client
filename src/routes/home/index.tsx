import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function HomePage() {
  const position = [21.90701850969123, -159.5107259618992] as LatLngExpression;
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            NTBG Headquarters <br />
            3530 Papalina Road <br />
            Kalaheo, HI 96741
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
