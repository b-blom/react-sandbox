import './App.css';
import Router from './contextTest/Router';
import './game/gameComponents/Action.css';
import GameRouter from './GameRouter';

function App() {
  return (
    <div className='App'>
      <Router />
      {/*  <GameRouter />
       */}{' '}
      <header className='App-header'></header>
    </div>
  );
}

export default App;
