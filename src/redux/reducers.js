import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIMESLOT,
  SET_RESERVATION_TIMES,
  SET_NEW_RESERVATION,
  SET_CURRENT_RESERVATIONS,
  SET_TIME_AVAILABILITY,
  SET_SELECTED_GUEST_DETAILS,
  SET_MOST_RECENT_RESERVATION,
} from './types'
import { Map, fromJS } from 'immutable'

export const initialState = Map({
  maxSize: [1, 2, 3, 4, 5],
  selectedPartySize: 0,
  selectedReservationTime: '',
  selectedReservationTimes: [],
  guestDetails: [],
  selectedGuestDetails: [],
  newReservation: [],
  currentReservations: [],
  mostRecentReservation: [],
  timeArr: [
    {
      time: '3:00',
      available: true,
    },
    {
      time: '3:15',
      available: true,
    },
    {
      time: '3:30',
      available: true,
    },
    {
      time: '3:45',
      available: true,
    },
    {
      time: '4:00',
      available: true,
    },
    {
      time: '4:15',
      available: true,
    },
    {
      time: '4:30',
      available: true,
    },
    {
      time: '4:45',
      available: true,
    },
    {
      time: '5:00',
      available: true,
    },
    {
      time: '5:15',
      available: true,
    },
    {
      time: '5:30',
      available: true,
    },
    {
      time: '5:45',
      available: true,
    },
    {
      time: '6:00',
      available: true,
    },
    {
      time: '6:15',
      available: true,
    },
    {
      time: '6:30',
      available: true,
    },
    {
      time: '6:45',
      available: true,
    },
    {
      time: '7:00',
      available: true,
    },
    {
      time: '7:15',
      available: true,
    },
    {
      time: '7:30',
      available: true,
    },
    {
      time: '7:45',
      available: true,
    },
    {
      time: '8:00',
      available: true,
    },
    {
      time: '8:15',
      available: true,
    },
    {
      time: '8:30',
      available: true,
    },
    {
      time: '8:45',
      available: true,
    },
    {
      time: '9:00',
      available: true,
    },
    {
      time: '9:15',
      available: true,
    },
    {
      time: '9:30',
      available: true,
    },
    {
      time: '9:45',
      available: true,
    },
    {
      time: '10:00',
      available: true,
    }
  ],
})

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTY_SIZE:
      return state.set('selectedPartySize', fromJS(action.payload))
    case SET_RESERVATION_TIMESLOT:
      return state.set('selectedReservationTime', fromJS(action.payload))
    case SET_RESERVATION_TIMES:
      return state.set('selectedReservationTimes', fromJS(action.payload))
    case SET_NEW_RESERVATION:
      return state.set('newReservation', fromJS(action.payload))
    case SET_CURRENT_RESERVATIONS:
      return state.set('currentReservations', fromJS(action.payload))
    case SET_TIME_AVAILABILITY:
      return state.setIn(['timeArr', action.payload, 'available'], false)
    case SET_SELECTED_GUEST_DETAILS:
      return state.set('selectedGuestDetails', fromJS(action.payload))
    case SET_MOST_RECENT_RESERVATION:
      return state.set('mostRecentReservation', fromJS(action.payload))
    default: return state
  }
}

export default reservationsReducer;