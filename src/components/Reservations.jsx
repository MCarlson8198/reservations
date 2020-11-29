import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import { getSortedReservations } from './index'
import PropTypes from 'prop-types'
import moment from 'moment';

function Reservations (props) {
  const {reservations, setSelectedGuestDetails, mostRecentReservation} = props
  const sortedReservations = getSortedReservations(reservations)

  const selectedGuestDetails = (res) => {
    setSelectedGuestDetails(res)
  }

  const titleRef = useRef()
  useEffect(() => {
    if (mostRecentReservation.size > 0) {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  
  const currentReservations = sortedReservations.map((res, index) => {
    const startTime = res.getIn(['selectedReservationTimes', 'startReservationTime'])
    const formattedStartTime = moment(startTime).format("h:mm")
    const formattedName = res.get('guestName').toUpperCase()
    let reference = null
 
    if (mostRecentReservation === formattedStartTime) {
      reference = titleRef
    }
    return (
      <Link
        className="reservations__list-link"
        key={index} 
        to={URL_RESERVATION_DETAILS}
        onClick={() => selectedGuestDetails(res)}
        id={reference}
      >
        <div className="reservations__list-item">
          <div className="reservations__left">
            <div className="reservations__list-size">{res.get('selectedPartySize')}</div>
          </div>
          <div className="reservations__right">
            <div className="reservations__list-name">{formattedName}</div>
            <div className="reservations__list-time">{formattedStartTime} PM</div>
          </div>
        </div>
      </Link>
    )
    
  }) || null

  return (
    <div className="reservations">
      <div className="reservations__create-button-container">
        <Link to={URL_PARTY_SIZE}>
          <button className="reservations__create-button">
            CREATE
          </button>
        </Link>
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
    mostRecentReservation: state.reservations.get('mostRecentReservation')
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setSelectedGuestDetails: actions.reservations.setSelectedGuestDetails,
    }
  },
)(Reservations);
