import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATIONS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import PropTypes from 'prop-types'
import moment from 'moment'

function ReservationDetails (props) {
  const {guestName, notes, startTime, partySize} = props
  const formattedStartTime = moment(startTime).format("h:mm")
  const formattedName = guestName.toUpperCase()

  return (
    <div className="reservation-details">
      <div>
        <Link
          className="reservation-details__close-button-container"
          to={URL_RESERVATIONS}
        >
          <button className="reservation-details__close-button">
            CLOSE
          </button>
        </Link>
      </div>
      <div className="reservation-details__container">
        <h1>Reservation Details</h1>
        <div className="reservation-details__text">
          <div className="reservation-details__name">{formattedName}</div>
          <div>
            <label className="reservation-details__size-label">
              Party Size:
            </label>
            <div className="reservation-details__size">{partySize}</div>
          </div>  
          <div>
            <label className="reservation-details__time-label">
              Time:
            </label>
            <div className="reservation-details__time">{formattedStartTime} PM</div>
          </div>
          <div>
          <label className="reservation-details__notes-label">
            Visit Notes:
          </label>
          <div className="reservation-details__notes">{notes}</div>
          </div>
        </div>
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