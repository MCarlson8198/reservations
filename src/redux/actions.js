import {
  USER_O,
  USER_X,
  SWITCH_USER,
  SET_TILE_DATA,
  SET_GAME_WON,
} from './types';

export function userO (value) {
  return {
    type: USER_O,
    payload: value,
  }
}

export function userX (value) {
  return {
    type: USER_X,
    payload: value,
  }
}

export function switchUser (value) {
  return {
    type: SWITCH_USER,
    payload: value,
  }
}

export function setTileData (value) {
  return {
    type: SET_TILE_DATA,
    payload: value,
  }
}

export function setGameWon (value) {
  return {
    type: SET_GAME_WON,
    payload: value,
  }
}