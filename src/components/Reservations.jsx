import React from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import { getSortedReservations } from './index'

function Reservations (props) {
  const {reservations, timeArr} = props
  console.log('HOME TIME ARR', timeArr)
  const sortedReservations = getSortedReservations(reservations)
  const currentReservations = sortedReservations.map((res, index) => {
    return (
    <div key={index}>{res.get('guestName')}</div>
    )
  }) || null
  
  return (
    <div>
      <h1>Reservations</h1>
      <div>
        <Link to={URL_PARTY_SIZE} >Party Size</Link>
      </div>
      <div>
        <Link to={URL_RESERVATION_DETAILS} >Reservation Details</Link>
      </div>
      <div>{currentReservations}</div>
    </div>
  )
}

export default connectRedux(
  state => ({
    reservations: state.reservations.get('currentReservations'),
    timeArr: state.reservations.get('timeArr'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setPartySize: actions.reservations.setPartySize,
    }
  },
)(Reservations);
