import {
  SET_PARTY_SIZE,
} from './types';

export function setPartySize (size) {
  return {
    type: SET_PARTY_SIZE,
    payload: size,
  }
}
