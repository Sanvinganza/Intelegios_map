import { LatLngExpression } from "leaflet";
import { TCoordinate, TCoordinateTable } from "./App";

export const calculateCenterMap = (coordinatesTable: TCoordinateTable) => {
    let sumX = 0;
    let sumY = 0;
    let coordinateCounter = 0;

    coordinatesTable.flat(1).forEach((coordinate: TCoordinate) => {
        sumX += coordinate[0];
        sumY += coordinate[1];
        coordinateCounter++;
    })

    return [sumX/coordinateCounter, sumY/coordinateCounter] as LatLngExpression;
}

export const tableToString = (coordinatesTable: TCoordinateTable) => {
    return coordinatesTable.flat(1).join(";");
}