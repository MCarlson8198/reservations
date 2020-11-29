import { describe, it } from 'mocha'
import { assert } from 'chai'
import { setPartySize } from './redux/actions'
import { SET_PARTY_SIZE } from './redux/types'

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
})
