import { SWITCH_USER } from './types'
import { setGameWon } from './actions'


function consoleThis ({store, action}) {
  console.log('Middleware 1 Fired', action)
  store.dispatch(setGameWon('TRUE'))
}
export default function newMiddleware (store) {
  return next => (action) => {
    const { type } = action
    
    switch (type) {
      case SWITCH_USER:
        consoleThis({store, action})
        break
      default:
        // Do nothing.
        break
    }
    next(action)
  }
}
