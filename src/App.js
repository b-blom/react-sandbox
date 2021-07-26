import logo from './logo.svg';
import './App.css';
import "./game/gameComponents/Action.css"
import Game from './game/Game';
import Net from './botnet/Net';
import FrontEnd from './FrontEnd';
import Bot from './botnet/Bot';
import CommandAndControl from './botnet/CommandAndControl';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Game />
      </header>
    </div>
  );
}

export default App;
