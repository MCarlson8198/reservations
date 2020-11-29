import { describe, it } from 'mocha'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import reservationsReducer, { initialState } from './reducers'
import { setPartySize, setReservationTime } from './actions'

chai.use(chaiImmutable)
const { assert } = chai

describe('reservations reducers', () => {
  describe('Reducer SET_PARTY_SIZE', () => {
    it('should set party size in state', () => {
      const size = 3
      const state = reservationsReducer(
        initialState,
        setPartySize(size),
      )
      assert.equal(value, state.get('selectedPartySize'))
    })
  })
  describe('Reducer SET_RESERVATION_TIMESLOT', () => {
    it('should set reservation time slot in state', () => {
      const time = {time: "3:00", available: true}
      const state = reservationsReducer(
        initialState,
        setReservationTime(time),
      )
      assert.equal(time, state.get('selectedReservationTime'))
    })
  })
})