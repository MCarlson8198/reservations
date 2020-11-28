import { SET_RESERVATION_TIME, SET_NEW_RESERVATION, SET_CURRENT_RESERVATIONS } from './types';
import { setReservationTimes, setCurrentReservations } from './actions';
import {List} from 'immutable';
import moment from 'moment'

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

function getReservationTimeSlots (hour, minutes) {
  const d = new Date()
  d.setHours(hour)
  const time1 = moment(d.setMinutes(minutes)).format('HH:mm')
  const time2 = moment(d.setMinutes(minutes)).add(15, 'minutes').format('HH:mm')
  const time3 = moment(d.setMinutes(minutes)).add(30, 'minutes').format('HH:mm')
  const time4 = moment(d.setMinutes(minutes)).add(45, 'minutes').format('HH:mm')
  const reservedTimes = [time1, time2, time3, time4]
  const reservedTimesClean = []
  reservedTimes.map((el) => {
    const newArr = el.split('')
      if (newArr[0] === '0'){
        newArr.shift()
        reservedTimesClean.push(newArr.join(''))
      } else {
        reservedTimesClean.push(el)
      }
      
  })
  return reservedTimesClean
}

function reserveFullHour ({store, action}) {
  const { reservations } = store.getState()
  const schedule = reservations.get('timeArr')
  const initialTime = action.payload.time
  const time = initialTime.split(':');
  const hour = parseInt(time[0])
  const minutes = parseInt(time[1])
  const startReservationTime = getStartTime(hour, minutes)
  const endReservationTime = getEndTime(hour, minutes)
  
  store.dispatch(setReservationTimes({
    startReservationTime: startReservationTime,
    endReservationTime: endReservationTime,
  }))

  
  console.log(getReservationTimeSlots(hour, minutes))
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
