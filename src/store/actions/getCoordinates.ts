/* eslint-disable @typescript-eslint/no-use-before-define */

export const fetchCoordinatesRequest = (
): IFetchCoordinatesRequest => ({
  type: EGetCoordinates.GET_COORDINATES_REQUEST
});

export const fetchCoordinatesSuccess = (
  payload: IFetchCoordinatesSuccessPayload
): IFetchCoordinatesSuccess => {
  return ({
    type: EGetCoordinates.GET_COORDINATES_SUCCESS,
    payload
  });
};

export const fetchCoordinatesFailure = (
  payload: IFetchCoordinatesFailurePayload
): IFetchCoordinatesFailure => ({
  type: EGetCoordinates.GET_COORDINATES_FAILURE,
  payload
});



export enum EGetCoordinates {
  GET_COORDINATES_REQUEST = "GET_COORDINATES_REQUEST",
  GET_COORDINATES_SUCCESS = "GET_COORDINATES_SUCCESS",
  GET_COORDINATES_FAILURE = "GET_COORDINATES_FAILURE"
}

export interface IFetchCoordinatesSuccessPayload {
  coordinates: any
}
export interface IFetchCoordinatesSuccess {
  type: typeof EGetCoordinates.GET_COORDINATES_SUCCESS,
  payload: IFetchCoordinatesSuccessPayload
}
export interface IFetchCoordinatesFailure {
  type: typeof EGetCoordinates.GET_COORDINATES_FAILURE,
  payload: IFetchCoordinatesFailurePayload
}
export interface IFetchCoordinatesFailurePayload {
  error: string
}
export interface IFetchCoordinatesRequest {
  type: typeof EGetCoordinates.GET_COORDINATES_REQUEST,
}