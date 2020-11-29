import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { URL_RESERVATIONS } from '../url/constants';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';

function GuestDetails (props) {
  const [notes, setNotes] = useState(null)
  const [guestName, setGuestName] = useState(null)
  const { selectedReservationTimes, setNewReservation, selectedPartySize, completeTimeReservation } = props
  const selectedHour = selectedReservationTimes.get('hour')
  const selectedMinute = selectedReservationTimes.get('minutes')
  console.log('selectedReservationTimes', selectedReservationTimes)
  console.log('selectedHour', selectedHour)
  console.log('selectedMinute', selectedMinute)

  const submitGuestDetails = () => {
    setNewReservation({guestName, notes, selectedReservationTimes, selectedPartySize})
    completeTimeReservation(selectedHour, selectedMinute)
  }

  const handleNameChange = (e) => {
    setGuestName(e.target.value)
  }

  const handleTextAreaChange = (e) => {
    setNotes(e.target.value)
  }

  return (
    <div>
      <h1>Guest Details</h1>
      <div>
       <form>
         <p>use local state to record form</p>
         <label>
           Guest Name:
           <div>
            <input type="text" text="name" onChange={(e) => handleNameChange(e)} />
           </div>
         </label>
         <label>
           Visit Notes:
           <div>
           <textarea onChange={(e) => handleTextAreaChange(e)} />
           </div>
         </label>
         <p>this submit button needs to check each piece of local state and verify before becoming available</p>
         <div>
          <Link to={URL_RESERVATIONS} type="submit" onClick={() => submitGuestDetails()} value="Submit">Save</Link>
         </div>
       </form>
      </div>
    </div>
  )
}

export default connectRedux(
  state => ({
    selectedPartySize: state.reservations.get('selectedPartySize'),
    selectedReservationTimes: state.reservations.get('selectedReservationTimes'),
    dailyTimes: state.reservations.get('timeArr'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setNewReservation: actions.reservations.setNewReservation,
      completeTimeReservation: actions.reservations.completeTimeReservation,
    }
  },
)(GuestDetails);
