import React from 'react';
import { Link } from 'react-router-dom'
import { URL_RESERVATION_TIME } from '../url/constants'
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from '../redux/actions/index';
import PropTypes from 'prop-types'

function PartySize (props) {
  const { maxSize, setPartySize } = props

  const recordPartySize = (el) => {
    setPartySize(el)
  }
  
  const selectSize = maxSize.map((el, index) => {
    return(
      <div key={index}>
        <Link
          className="party-size__list-item--link"
          to={URL_RESERVATION_TIME}
          onClick={() => recordPartySize(el)}
          >
          <div className="party-size__list-item">
            {el}
          </div>
        </Link>
      </div>
    )
  })

  return (
    <div className="party-size">
      <h1 className="party-size__header">Select a Party Size</h1>
      <div className="party-size__container">{selectSize}</div>
    </div>
  )
}

PartySize.propTypes = {
  maxSize: PropTypes.array.isRequired,
  setPartySize: PropTypes.func.isRequired,
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