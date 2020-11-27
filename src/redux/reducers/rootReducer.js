import { combineReducers } from 'redux';
import gameReducer, { initialState as gameInitialState } from '../reducers'

export const reducers ={
  gameData: gameReducer,
}

export const initialState = {
  gameData: gameInitialState,
}

export default combineReducers(reducers)