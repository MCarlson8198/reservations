import { SET_RESERVATION_TIME } from './types'
// import { setGameWon } from './actions'


function reserveFullHour ({store, action}) {
  console.log('Time Selected', action)
  const initialTime = action.payload
  const time = initialTime.split(':');
  const hour = time[0]
  const minutes = time[1]
console.log('INITIAL TIME', time)
console.log('hour', hour)
console.log('minutes', minutes)
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
