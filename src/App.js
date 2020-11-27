import './App.css';
import { connect as connectRedux } from 'react-redux';
import { getBoundActions } from './redux/actions/index';

function App(props) {
  const { switchUser, currentUserSide, gameWon } = props
  const newAction = () => {
    switchUser('X')
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Current User: {currentUserSide}
        </p>
        <p>
        GameIsWon: {gameWon}
        </p>
        <button onClick={() => newAction()}>CLICK</button>
        <button onClick={() => switchUser('O')}>For O</button>
      </header>
    </div>
  );
}

export default connectRedux(
  state => ({
    gameData: state.gameData,
    gameWon: state.gameData.get('gameIsWon'),
    winningConditions: state.gameData.get('winningArr'),
    tileData: state.gameData.get('tileData'),
    currentUserSide: state.gameData.get('userSide'),
    userXData: state.gameData.get('userXChoices'),
    userOData: state.gameData.get('userOChoices'),
  }),
  (dispatch) => {
    const actions = getBoundActions(dispatch)
    return {
      userO: actions.game.userO,
      userX: actions.game.userX,
      switchUser: actions.game.switchUser,
      setTileData: actions.game.setTileData,
      setGameWon: actions.game.setGameWon,
    }
  },
)(App);
