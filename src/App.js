import './App.scss';
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



function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={URL_RESERVATIONS} exact component={Reservations} />
          <Route path={URL_PARTY_SIZE} exact component={PartySize} />
          <Route path={URL_RESERVATION_TIME} exact component={ReservationTime} />
          <Route path={URL_RESERVATION_DETAILS} exact component={ReservationDetails} />
          <Route path={URL_GUEST_DETAILS} exact component={GuestDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
