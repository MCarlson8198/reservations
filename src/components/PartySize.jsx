import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATION_TIME } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';

function PartySize (props) {
  const { maxSize, setPartySize } = props

  const recordPartySize = (el) => {
    setPartySize(el)
  }
  
  const selectSize = maxSize.map((el, index) => {
    return(
      <div key={index}>
        <Link
          to={URL_RESERVATION_TIME}
          onClick={() => recordPartySize(el)}
          >{el}</Link>
      </div>
    )
  })

  return (
    <div>
      <h1>Party Size</h1>
      <div>{selectSize}</div>
    </div>
  )
}

export default connectRedux(
  state => ({
    maxSize: state.reservations.get('maxSize'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      setPartySize: actions.reservations.setPartySize,
    }
  },
)(PartySize);