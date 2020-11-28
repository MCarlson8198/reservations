import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATIONS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';

function ReservationDetails (props) {
  const {guestName, notes, startTime, endTime} = props

  return (
    <div>
      <h1>Reservation Details</h1>
      <div>
        <div>{guestName}</div>
        <div>{notes}</div>
        <Link to={URL_RESERVATIONS} >Reservations</Link>
      </div>
    </div>
  )
}

export default connectRedux(
  state => ({
    guestName: state.reservations.getIn(['selectedGuestDetails', 'guestName']),
    notes: state.reservations.getIn(['selectedGuestDetails', 'notes']),
    startTime: state.reservations.getIn(['selectedGuestDetails', 'selectedReservationTimes', 'startReservationTime']),
    endTime: state.reservations.getIn(['selectedGuestDetails', 'selectedReservationTimes', 'endReservationTime']),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setPartySize: actions.reservations.setPartySize,
    }
  },
)(ReservationDetails);