import { describe, it } from 'mocha'
import { assert } from 'chai'
import { SET_PARTY_SIZE, SET_RESERVATION_TIMESLOT } from './types'
import { setPartySize, setReservationTime } from './actions'

describe('reservations actions', () => {
  describe('Function: setPartySize()', () => {
    it('should create an action', () => {
      const size = 3
      const action = {
        type: SET_PARTY_SIZE,
        payload: size,
      }
      assert.deepEqual(
        action,
        setPartySize(size),
      )
    })
  })
  describe('Function: setReservationTime()', () => {
    it('should create an action', () => {
      const time = {time: "3:00", available: true}
      const action = {
        type: SET_RESERVATION_TIMESLOT,
        payload: time,
      }
      assert.deepEqual(
        action,
        setReservationTime(time),
      )
    })
  })
})