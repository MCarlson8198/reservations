import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIME,
} from './types'
import { Map, fromJS } from 'immutable'

export const initialState = Map({
  maxSize: [1, 2, 3, 4, 5],
  selectedPartySize: 0,
  selectedReservationTime: '',
  timeArr: [
    '3:00',
    '3:15',
    '3:30',
    '3:45',
    '4:00',
    '4:15',
    '4:30',
    '4:45',
    '5:00',
    '5:15',
    '5:30',
    '5:45',
    '6:00',
    '6:15',
    '6:30',
    '6:45',
    '7:00',
    '7:15',
    '7:30',
    '7:45',
    '8:00',
    '8:15',
    '8:30',
    '8:45',
    '9:00',
    '9:15',
    '9:30',
    '9:45',
    '10:00',
  ],
})

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTY_SIZE:
      return state.set('selectedPartySize', fromJS(action.payload))
    case SET_RESERVATION_TIME:
      return state.set('selectedReservationTime', fromJS(action.payload))
    default: return state
  }
}

export default reservationsReducer;