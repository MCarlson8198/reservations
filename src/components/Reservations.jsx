import React from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import { getSortedReservations } from './index'
import PropTypes from 'prop-types'
import moment from 'moment';

function Reservations (props) {
  const {reservations, setSelectedGuestDetails} = props

  const sortedReservations = getSortedReservations(reservations)
  const selectedGuestDetails = (res) => {
    setSelectedGuestDetails(res)
  }
  
  const currentReservations = sortedReservations.map((res, index) => {
    const startTime = res.getIn(['selectedReservationTimes', 'startReservationTime'])
    const formattedStartTime = moment(startTime).format("h:mm")
    return (
      <Link
        className="reservations__list-link"
        key={index} 
        to={URL_RESERVATION_DETAILS}
        onClick={() => selectedGuestDetails(res)}
      >
        <div className="reservations__list-item">
          <div className="reservations__list-size">{res.get('selectedPartySize')}</div>
          <div className="reservations__list-name">{res.get('guestName')}</div>
          <div className="reservations__list-time">{formattedStartTime} PM</div>
        </div>
      </Link>
    )
  }) || null

  return (
    <div className="reservations">
      <div className="reservations__create-button">
        <Link to={URL_PARTY_SIZE}><button>Create</button></Link>
      </div>
      <h1 className="reservations__heading">Reservations</h1>
      {
      currentReservations.size > 0 ?
      <div className="reservations__container">{currentReservations}</div> :
      <div className="reservations__empty">No Current Reservations</div>
      }
      
    </div>
  )
}

Reservations.propTypes = {
  setSelectedGuestDetails: PropTypes.func.isRequired,
}

export default connectRedux(
  state => ({
    reservations: state.reservations.get('currentReservations'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setSelectedGuestDetails: actions.reservations.setSelectedGuestDetails,
    }
  },
)(Reservations);
