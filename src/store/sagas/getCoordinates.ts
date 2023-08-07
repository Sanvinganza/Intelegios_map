import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getCoordinates } from "../../api/getCoordinates";
import { EGetCoordinates, fetchCoordinatesFailure, fetchCoordinatesSuccess } from "../actions/getCoordinates";

function* fetchCoordinatesSaga() {
  try {
    const response: AxiosResponse<any[]> = yield call(getCoordinates);
    
    yield put(fetchCoordinatesSuccess({
        coordinates: response.data
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchCoordinatesFailure({
          error: e.message
        })
      );
    } else {
      console.log('Unexpected error', e);
    }
  }
}

function* getCoordinatesSaga() {
  yield all([takeLatest(EGetCoordinates.GET_COORDINATES_REQUEST, fetchCoordinatesSaga)]);
}

export default getCoordinatesSaga;