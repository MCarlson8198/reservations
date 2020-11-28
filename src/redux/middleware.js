import { SET_PARTY_SIZE } from './types'
// import { setGameWon } from './actions'


function consoleThis ({store, action}) {
  console.log('Part Size', action)
  // store.dispatch(setGameWon('TRUE'))
}
export default function newMiddleware (store) {
  return next => (action) => {
    const { type } = action
    
    switch (type) {
      case SET_PARTY_SIZE:
        consoleThis({store, action})
        break
      default:
        // Do nothing.
        break
    }
    next(action)
  }
}
