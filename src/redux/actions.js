import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIMESLOT,
  SET_NEW_RESERVATION,
  SET_RESERVATION_TIMES,
  SET_CURRENT_RESERVATIONS,
  SET_TIME_AVAILABILITY,
  SET_SELECTED_GUEST_DETAILS,
  COMPLETE_TIME_RESERVATION,
  SET_MOST_RECENT_RESERVATION,
} from './types';

export function setPartySize (size) {
  return {
    type: SET_PARTY_SIZE,
    payload: size,
  }
}

export function setReservationTime (time) {
  return {
    type: SET_RESERVATION_TIMESLOT,
    payload: time,
  }
}

export function setNewReservation (info) {
  return {
    type: SET_NEW_RESERVATION,
    payload: info,
  }
}

export function setReservationTimes (times) {
  return {
    type: SET_RESERVATION_TIMES,
    payload: times,
  }
}

export function setCurrentReservations (data) {
  return {
    type: SET_CURRENT_RESERVATIONS,
    payload: data,
  }
}

export function setTimeAvailability (index) {
  return {
    type: SET_TIME_AVAILABILITY,
    payload: index,
  }
}

export function setSelectedGuestDetails (info) {
  return {
    type: SET_SELECTED_GUEST_DETAILS,
    payload: info,
  }
}

export function completeTimeReservation (hour, minutes) {
  return {
    type: COMPLETE_TIME_RESERVATION,
    payload: {hour, minutes},
  }
}

export function setMostRecentReservation (time) {
  return {
    type: SET_MOST_RECENT_RESERVATION,
    payload: time,
  }
}
