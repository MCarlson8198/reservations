import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATIONS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types'
import moment from 'moment'

function ReservationDetails (props) {
  const {guestName, notes, startTime, partySize} = props
  const formattedStartTime = moment(startTime).format("h:mm")

  return (
    <div className="reservation-details">
      <div>
        <Link
          className="reservation-details__close-button"
          to={URL_RESERVATIONS}
        >
          <button className="reservation-details__close-button">
            Close
          </button>
        </Link>
      </div>
      <h1>Reservation Details</h1>
      <div>
        <label>
          <div className="reservation-details__name">{guestName}</div>
        </label>
        <label className="reservation-details__size-label">
          Party Size:
          <div className="reservation-details__size">{partySize}</div>
        </label>
        <label className="reservation-details__time-label">
          Time:
          <div className="reservation-details__time">{formattedStartTime} PM</div>
        </label>
        <label className="reservation-details__notes-label">
          Notes:
          <div className="reservation-details__notes">{notes}</div>
        </label>
      </div>
    </div>
  )
}

ReservationDetails.propTypes = {
  guestName: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  startTime: PropTypes.object.isRequired,
  partySize: PropTypes.number.isRequired,
}

export default connectRedux(
  state => ({
    guestName: state.reservations.getIn(['selectedGuestDetails', 'guestName']),
    notes: state.reservations.getIn(['selectedGuestDetails', 'notes']),
    startTime: state.reservations.getIn(['selectedGuestDetails', 'selectedReservationTimes', 'startReservationTime']),
    partySize: state.reservations.get('selectedPartySize'),
  }),
)(ReservationDetails);