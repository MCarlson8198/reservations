import { bindActionCreators } from 'redux';

import * as GameActions from '../actions';

let boundActions = null

export default getBoundActions

export function getBoundActions (dispatch) {
  if (!boundActions) {
    boundActions = {
      game: bindActionCreators(GameActions, dispatch),
    }
  }
  return boundActions
}