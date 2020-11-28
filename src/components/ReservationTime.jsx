import React from 'react';
import { Link } from 'react-router-dom';
import { URL_GUEST_DETAILS } from '../url/constants';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';

function ReservationTime (props) {
  const { selectedPartySize, dailyTimes, setReservationTime } = props

  const recordReservationTime = (timeSlot) => {
    setReservationTime(timeSlot)
  }

  const times = dailyTimes.map((timeSlot, index) => {
    if (timeSlot.available === true) {
      return (
        <div key={index}>
          <Link
            to={URL_GUEST_DETAILS}
            onClick={() => recordReservationTime(timeSlot)}
            >{timeSlot.time}</Link>
        </div>
      )
    }
    return null
  })
  return (
    <div>
      <h1>Reservation Time</h1>
      <div>
        {selectedPartySize}
      </div>
      <div>
        {times}
      </div>
    </div>
  )
}

export default connectRedux(
  state => ({
    selectedPartySize: state.reservations.get('selectedPartySize'),
    dailyTimes: state.reservations.get('timeArr'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setReservationTime: actions.reservations.setReservationTime,
    }
  },
)(ReservationTime);