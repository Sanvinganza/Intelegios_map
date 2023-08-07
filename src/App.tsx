import Sider from "antd/es/layout/Sider";
import Layout, { Content } from "antd/es/layout/layout";
import { CoordinatesTable } from "./components/CoordinatesTable";
import { Map } from "./components/Map";
import { tableToString } from "./helpers";
import { useEffect, useState } from "react";

const data = [
  {
    key: 1,
    name: "Path 1",
  },
  {
    key: 2,
    name: "Path 2",
  },
  {
    key: 3,
    name: "Path 3",
  },
];

export type TRoutes = {
  geometry: {
    coordinates: TCoordinate[];
  };
};

export type TCoordinate = [number, number];
export type TCoordinateTable = TCoordinate[][];
export type TOSMRCoordinates = {
  code: string;
  routes: TRoutes[];
};
const coordinatesTable: TCoordinateTable = [
  [
    [59.84660399, 30.29496392],
    [59.82934196, 30.42423701],
    [59.83567701, 30.38064206],
  ],
  // [
  //   [59.82934196, 30.42423701],
  //   [59.82761295, 30.41705607],
  //   [59.84660399, 30.29496392],
  // ],
  // [
  //   [59.83567701, 30.38064206],
  //   [59.84660399, 30.29496392],
  //   [59.82761295, 30.41705607],
  // ],
];

function App() {
  const [dataCoordinates, setDataCoordinates] = useState<TCoordinateTable>(coordinatesTable);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `http://router.project-osrm.org/route/v1/driving/${tableToString(
          coordinatesTable
        )}?geometries=geojson&steps=false`
      )
        .then((response) => response.json())
        .then((response: TOSMRCoordinates) => {
          return response.routes
          .map((route: TRoutes) => {
            return route.geometry.coordinates;
          });
        })
        .then(setDataCoordinates);
    };

    fetchData();
  }, []);

  console.log(dataCoordinates);

  return (
    <Layout hasSider style={{ height: "100vh" }}>
      <Sider>
        <CoordinatesTable data={data} />
      </Sider>
      <Content>
        <Map coordinatesTable={dataCoordinates} />
      </Content>
    </Layout>
  );
}

export default App;
