import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIME,
} from './types';

export function setPartySize (size) {
  return {
    type: SET_PARTY_SIZE,
    payload: size,
  }
}

export function setReservationTime (time) {
  return {
    type: SET_RESERVATION_TIME,
    payload: time,
  }
}
