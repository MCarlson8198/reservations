import React from 'react';
import { Link } from 'react-router-dom';
import { URL_GUEST_DETAILS } from '../url/constants';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';

function ReservationTime (props) {
  const { selectedPartySize } = props
  return (
    <div>
      <h1>Reservation Time</h1>
      <div>
        {selectedPartySize}
      </div>
      <div>
      <Link to={URL_GUEST_DETAILS} >Guest Details</Link>
      </div>
    </div>
  )
}

export default connectRedux(
  state => ({
    selectedPartySize: state.reservations.get('selectedPartySize'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setPartySize: actions.reservations.setPartySize,
    }
  },
)(ReservationTime);