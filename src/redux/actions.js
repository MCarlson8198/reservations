import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIME,
  SET_GUEST_DETAILS,
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

export function setGuestDetails (details) {
  return {
    type: SET_GUEST_DETAILS,
    payload: { details },
  }
}
