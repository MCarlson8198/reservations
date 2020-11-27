import {
  USER_O,
  USER_X,
  SWITCH_USER,
  SET_TILE_DATA,
  SET_GAME_WON,
} from './types'
import { Map, fromJS } from 'immutable'

export const initialState = Map({
  gameIsWon: null,
  userOChoices: [],
  userXChoices: [], 
  userSide: null,
  tileData: ["", "", "", "", "", "", "", "", ""],
  winningArr: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
})

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_O:
      return state.set('userOChoices', fromJS(action.payload))
    case USER_X:
      return state.set('userXChoices', fromJS(action.payload))
    case SWITCH_USER:
      return state.set('userSide', action.payload)
    case SET_TILE_DATA:
      return state.set('tileData', action.payload)
    case SET_GAME_WON:
      return state.set('gameIsWon', fromJS(action.payload))
    default: return state
  }
}

export default gameReducer;