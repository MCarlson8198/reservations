import './App.css';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from './redux/actions/index';
import Reservations from './components/Reservations';
import ReservationDetails from './components/ReservationDetails';
import PartySize from './components/PartySize';
import GuestDetails from './components/GuestDetails';
import ReservationTime from './components/ReservationTime'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  URL_RESERVATIONS,
  URL_PARTY_SIZE,
  URL_RESERVATION_DETAILS,
  URL_GUEST_DETAILS,
  URL_RESERVATION_TIME,
} from './url/constants'



function App(props) {
  const { switchUser, currentUserSide, gameWon } = props
  const newAction = () => {
    switchUser('X')
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={URL_RESERVATIONS} exact component={Reservations} />
          <Route path={URL_RESERVATION_TIME} exact component={ReservationTime} />
          <Route path={URL_PARTY_SIZE} exact component={PartySize} />
          <Route path={URL_RESERVATION_DETAILS} exact component={ReservationDetails} />
          <Route path={URL_GUEST_DETAILS} exact component={GuestDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default connectRedux(
  state => ({
    gameData: state.reservations,
    gameWon: state.reservations.get('gameIsWon'),
    winningConditions: state.reservations.get('winningArr'),
    tileData: state.reservations.get('tileData'),
    currentUserSide: state.reservations.get('userSide'),
    userXData: state.reservations.get('userXChoices'),
    userOData: state.reservations.get('userOChoices'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      userO: actions.reservations.userO,
      userX: actions.reservations.userX,
      switchUser: actions.reservations.switchUser,
      setTileData: actions.reservations.setTileData,
      setGameWon: actions.reservations.setGameWon,
    }
  },
)(App);
