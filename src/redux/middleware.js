import { SET_RESERVATION_TIME } from './types'
// import { setGameWon } from './actions'


function reserveFullHour ({store, action}) {
  console.log('Time Selected', action)
  // store.dispatch(setGameWon('TRUE'))
}
export default function newMiddleware (store) {
  return next => (action) => {
    const { type } = action
    
    switch (type) {
      case SET_RESERVATION_TIME:
        reserveFullHour({store, action})
        break
      default:
        // Do nothing.
        break
    }
    next(action)
  }
}
