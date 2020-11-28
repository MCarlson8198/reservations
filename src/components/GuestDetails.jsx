import React from 'react';
import { Link } from 'react-router-dom';
import { URL_RESERVATIONS } from '../url/constants';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';

function GuestDetails (props) {
  const { setGuestDetails } = props

  const submitGuestDetails = (timeSlot) => {
    setGuestDetails(timeSlot)
  }

  return (
    <div>
      <h1>Guest Details</h1>
      <div>
       <form>
         <p>use local state to record form</p>
         <input text="gather info" />
         <button onClick={() => submitGuestDetails()}>Submit</button>
       </form>
      </div>
      <div>
        <Link to={URL_RESERVATIONS}>Home</Link>
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
      setGuestDetails: actions.reservations.setGuestDetails,
    }
  },
)(GuestDetails);
