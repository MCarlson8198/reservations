import { bindActionCreators } from 'redux';

import * as ReservationsActions from '../actions';

let boundActions = null

export default getBoundActions

export function getBoundActions (dispatch) {
  if (!boundActions) {
    boundActions = {
      reservations: bindActionCreators(ReservationsActions, dispatch),
    }
  }
  return boundActions
}