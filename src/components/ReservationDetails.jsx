import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATIONS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import moment from 'moment'

function ReservationDetails (props) {
  const {guestName, notes, startTime, partySize} = props
  const formattedStartTime = moment(startTime).format("h:mm")

  return (
    <div>
      <div>
        <Link to={URL_RESERVATIONS} >Close</Link>
      </div>
      <h1>Reservation Details</h1>
      <div>
        <label>
          Guest Name:
          <div>{guestName}</div>
        </label>
        <label>
          Party Size:
          <div>{partySize}</div>
        </label>
        <label>
          Time:
          <div>{formattedStartTime} PM</div>
        </label>
        <label>
          Notes:
          <div>{notes}</div>
        </label>
      </div>
    </div>
  )
}

export default connectRedux(
  state => ({
    guestName: state.reservations.getIn(['selectedGuestDetails', 'guestName']),
    notes: state.reservations.getIn(['selectedGuestDetails', 'notes']),
    startTime: state.reservations.getIn(['selectedGuestDetails', 'selectedReservationTimes', 'startReservationTime']),
    partySize: state.reservations.get('selectedPartySize'),
  }),
)(ReservationDetails);