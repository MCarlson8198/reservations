import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import _assign from 'lodash/assign'
import newMiddleware from './middleware'

function makeStore (options = {}) {
  const { initialState = {} } = options
  const state = _assign({}, initialState)
  const devToolsCompose = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeEnhancers = devToolsCompose || compose
  
return  reduxCreateStore(
  rootReducer,
  state,
  composeEnhancers(applyMiddleware(newMiddleware)),
  )
}
export default makeStore