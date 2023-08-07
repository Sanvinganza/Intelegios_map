import { all, fork } from "redux-saga/effects";
import getCoordinatesSaga from "./getCoordinates";

export default function* rootSaga() {
    yield all([fork(getCoordinatesSaga)]);
}