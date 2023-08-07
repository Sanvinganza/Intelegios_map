import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { TCoordinateTable } from "../App";
import { LatLngExpression } from "leaflet";
import { calculateCenterMap } from "../helpers";

export interface IMapProps {
  coordinatesTable: TCoordinateTable;
}

export function Map({ coordinatesTable }: IMapProps) {
  const center: LatLngExpression = calculateCenterMap(coordinatesTable);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline pathOptions={{ color: "purple" }} positions={coordinatesTable} />
    </MapContainer>
  );
}
