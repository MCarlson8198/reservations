import React from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import { getSortedReservations } from './index'
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
    <div key={index} className="reservations__list-item">
      <div className="reservations__list-size">{res.get('selectedPartySize')}</div>
      <Link
        className="reservations__list-name"
        to={URL_RESERVATION_DETAILS}
        onClick={() => selectedGuestDetails(res)}>
          {res.get('guestName')}
      </Link>
    <div className="reservations__list-time">{formattedStartTime} PM</div>
    </div>
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

export default connectRedux(
  state => ({
    reservations: state.reservations.get('currentReservations'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setPartySize: actions.reservations.setPartySize,
      setSelectedGuestDetails: actions.reservations.setSelectedGuestDetails,
    }
  },
)(Reservations);
