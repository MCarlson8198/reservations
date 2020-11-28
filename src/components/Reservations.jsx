import React from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import {Map, List} from 'immutable';

function Reservations (props) {
  const {reservations = Map()} = props
  console.log('type', typeof reservations)
  console.log('current reservations', reservations)
  // const currentReservations = reservations.map((res, index) => {
  //   return (
  //   <div key={index}>{res.guestName}</div>
  //   )
  // }) || null
  // <div>{currentReservations}</div>
  return (
    <div>
      <h1>Reservations</h1>
      <div>
        <Link to={URL_PARTY_SIZE} >Party Size</Link>
      </div>
      <div>
        <Link to={URL_RESERVATION_DETAILS} >Reservation Details</Link>
      </div>
      
    </div>
  )
}

export default connectRedux(
  state => ({
    reservations: state.reservations,
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setPartySize: actions.reservations.setPartySize,
    }
  },
)(Reservations);
