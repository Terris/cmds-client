import type { Meta, StoryObj } from "@storybook/react";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapTemplate() {
  const position = [21.90701850969123, -159.5107259618992] as LatLngExpression;

  return (
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
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Map",
  component: MapTemplate,
  parameters: {},
} satisfies Meta<typeof MapTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
