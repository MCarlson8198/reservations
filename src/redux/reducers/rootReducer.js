import { combineReducers } from 'redux';
import reservationsReducer, { initialState as reservationsInitialState } from '../reducers'

export const reducers ={
  reservations: reservationsReducer,
}

export const initialState = {
  reservations: reservationsInitialState,
}

export default combineReducers(reducers)