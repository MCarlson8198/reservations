import React from 'react';
import { Link } from 'react-router-dom';
import { URL_GUEST_DETAILS } from '../url/constants';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import PropTypes from 'prop-types'

function ReservationTime (props) {
  const { dailyTimes, setReservationTime } = props

  const recordReservationTime = (timeSlot) => {
    setReservationTime(timeSlot)
  }

  const times = dailyTimes.map((timeSlot, index) => {
    if (timeSlot.available === true) {
      return (
        <div key={index}>
          <Link
            className="reservation-time__list-item--link reservation-time__list-item--available"
            to={URL_GUEST_DETAILS}
            onClick={() => recordReservationTime(timeSlot)}
            >
            <div className="reservation-time__list-item">
              <p className="reservation-time__list-item-time">
                {timeSlot.time} PM
              </p>
            </div>
          </Link>
        </div>
      )
    }
    return (
      <div key={index}>
        <div className="reservation-time__list-item reservation-time__list-item--unavailable">
          <p className="reservation-time__list-item-time reservation-time__list-item--unavailable">
            {timeSlot.time} PM
          </p>
          <p className="reservation-time__list-item-taken reservation-time__list-item--unavailable">
            Unavailable
          </p>
        </div>
      </div>
    )
  })
  return (
    <div className="reservation-time">
      <h1 className="reservation-time__heading">Select a Time</h1>
      <div className="reservation-time__container">
        {times}
      </div>
    </div>
  )
}

ReservationTime.propTypes = {
  dailyTimes: PropTypes.array.isRequired,
  setReservationTime: PropTypes.func.isRequired,
}

export default connectRedux(
  state => ({
    dailyTimes: state.reservations.get('timeArr'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setReservationTime: actions.reservations.setReservationTime,
    }
  },
)(ReservationTime);