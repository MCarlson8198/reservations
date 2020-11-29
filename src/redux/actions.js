import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIMESLOT,
  SET_GUEST_DETAILS,
  SET_NEW_RESERVATION,
  SET_RESERVATION_TIMES,
  SET_CURRENT_RESERVATIONS,
  SET_TIME_AVAILABILITY,
  SET_SELECTED_GUEST_DETAILS,
  COMPLETE_TIME_RESERVATION,
} from './types';

export function setPartySize (size) {
  // console.log('setPartySize', size)
  return {
    type: SET_PARTY_SIZE,
    payload: size,
  }
}

export function setReservationTime (time) {
  // console.log('setReservationTime', time)
  return {
    type: SET_RESERVATION_TIMESLOT,
    payload: time,
  }
}

export function setGuestDetails (details) {
  // console.log('setGuestDetails', details)
  return {
    type: SET_GUEST_DETAILS,
    payload: details,
  }
}

export function setNewReservation (info) {
  // console.log('reservation details', info)
  return {
    type: SET_NEW_RESERVATION,
    payload: info,
  }
}

export function setReservationTimes (times) {
  // console.log('reservation times', times)
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
