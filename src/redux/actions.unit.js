import { describe, it } from 'mocha'
import { assert } from 'chai'
import {
  SET_PARTY_SIZE,
  SET_RESERVATION_TIMESLOT,
  SET_NEW_RESERVATION,
  SET_RESERVATION_TIMES,
  SET_CURRENT_RESERVATIONS,
  SET_TIME_AVAILABILITY,
  COMPLETE_TIME_RESERVATION,
} from './types'
import {
  setPartySize,
  setReservationTime,
  setNewReservation,
  setReservationTimes,
  setCurrentReservations,
  setTimeAvailability,
  completeTimeReservation,
} from './actions'

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
  describe('Function: setNewReservation()', () => {
    it('should create an action', () => {
      // Because I cannot run this test, I dont know if the selectedReservationTimes key:value pair is correct,
      // this is my best guess at the initial set up of this test
      const info = {guestName: "John", notes: "notes", selectedReservationTimes: Map, selectedPartySize: 1}
      const action = {
        type: SET_NEW_RESERVATION,
        payload: info,
      }
      assert.deepEqual(
        action,
        setNewReservation(info),
      )
    })
  })
  describe('Function: setReservationTimes()', () => {
    it('should create an action', () => {
      // Because I cannot run this test, I dont know if the times object is correct,
      // this is my best guess at the initial set up of this test
      const times = {startReservationTime: "Sun Nov 29 2020 03:00:12 GMT-0700 (Mountain Standard Time)", endReservationTime: "Sun Nov 29 2020 03:45:12 GMT-0700 (Mountain Standard Time)", hour: 3, minutes: 0}
      const action = {
        type: SET_RESERVATION_TIMES,
        payload: times,
      }
      assert.deepEqual(
        action,
        setReservationTimes(times),
      )
    })
  })
  describe('Function: setCurrentReservations()', () => {
    it('should create an action', () => {
      // Because I cannot run this test, I dont know if the data array is correct,
      // this is my best guess at the initial set up of this test
      const data = [{guestName: "Jane", notes: "notes", selectedReservationTimes: Map, selectedPartySize: 1}]
      const action = {
        type: SET_CURRENT_RESERVATIONS,
        payload: data,
      }
      assert.deepEqual(
        action,
        setCurrentReservations(data),
      )
    })
  })
  describe('Function: setTimeAvailability()', () => {
    it('should create an action', () => {
      // Because I cannot run this test, I dont know if the data array is correct,
      // this is my best guess at the initial set up of this test
      const index = 12
      const action = {
        type: SET_TIME_AVAILABILITY,
        payload: index,
      }
      assert.deepEqual(
        action,
        setTimeAvailability(index),
      )
    })
  })
  describe('Function: completeTimeReservation()', () => {
    it('should create an action', () => {
      const hour = 7
      const minutes = 45
      const action = {
        type: COMPLETE_TIME_RESERVATION,
        payload: {hour, minutes},
      }
      assert.deepEqual(
        action,
        completeTimeReservation({hour, minutes}),
      )
    })
  })
})