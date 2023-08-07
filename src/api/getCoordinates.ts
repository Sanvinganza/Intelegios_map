import axios from "axios";

export const getCoordinates = () => axios({
  method: 'get',
  url: 'http://router.project-osrm.org/route/v1/driving/13.388860,52.517037;13.397634,52.529407;13.428555,52.523219?overview=false',
  // headers: {
  //   'Client-ID': process.env['CLIENT-ID'] as string,
  //   'Authorization': process.env['AUTHORIZATION'] as string
  // }
});