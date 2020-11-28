import { SET_RESERVATION_TIME, SET_NEW_RESERVATION, SET_CURRENT_RESERVATIONS } from './types';
import { setReservationTimes, setCurrentReservations } from './actions';
import {List} from 'immutable';

function getStartTime (hour, minutes) {
  const d = new Date()
  d.setHours(hour)
  d.setMinutes(minutes)
  return d
}

function getEndTime (hour, minutes) {
  const d = new Date()
  if (minutes >= 15) {
    d.setHours(hour + 1)
    d.setMinutes(minutes - 15)
  } else {
    d.setMinutes(minutes - 15)
    d.setHours(hour)
  }
  return d
}

function reserveFullHour ({store, action}) {
  const initialTime = action.payload
  const time = initialTime.split(':');
  const hour = parseInt(time[0])
  const minutes = parseInt(time[1])
  const startReservationTime = getStartTime(hour, minutes)
  const endReservationTime = getEndTime(hour, minutes)
  store.dispatch(setReservationTimes({
    startReservationTime: startReservationTime,
    endReservationTime: endReservationTime,
  }))
}

function addReservationToList({store, action}) {
  let updatedReservations = []
  const {reservations} = store.getState()
  const newRes = List(reservations.get('currentReservations'))
  newRes.map(item => {
    return updatedReservations.push(item)
  })
  updatedReservations.splice(newRes.size, 1, action.payload)
  store.dispatch(setCurrentReservations(updatedReservations))
}

export default function newMiddleware (store) {
  return next => (action) => {
    const { type } = action
    
    switch (type) {
      case SET_RESERVATION_TIME:
        reserveFullHour({store, action})
        break
      case SET_NEW_RESERVATION:
        addReservationToList({store, action})
        break
      default:
        // Do nothing.
        break
    }
    next(action)
  }
}
