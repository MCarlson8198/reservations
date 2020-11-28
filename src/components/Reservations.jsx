import React from 'react';
import { Link } from 'react-router-dom'
import { URL_PARTY_SIZE, URL_RESERVATION_DETAILS } from '../url/constants'
// import { connect as connectRedux } from 'react-redux';
// import { getBoundActions } from './redux/actions/index';

export default function Reservations () {
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

// export default connectRedux(
//   state => ({
//     gameData: state.reservations,
//     gameWon: state.reservations.get('gameIsWon'),
//     winningConditions: state.reservations.get('winningArr'),
//     tileData: state.reservations.get('tileData'),
//     currentUserSide: state.reservations.get('userSide'),
//     userXData: state.reservations.get('userXChoices'),
//     userOData: state.reservations.get('userOChoices'),
//   }),
//   (dispatch) => {
//     const actions = getBoundActions(dispatch)
//     return {
//       userO: actions.reservations.userO,
//       userX: actions.reservations.userX,
//       switchUser: actions.reservations.switchUser,
//       setTileData: actions.reservations.setTileData,
//       setGameWon: actions.reservations.setGameWon,
//     }
//   },
// )(Reservations);