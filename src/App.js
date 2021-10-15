import './App.css';
import './game/Game.css';
import './game/gameComponents/Action.css';
import Authorizer from './Authorizer';
import RandomGenerator from './quizMaker/RandomGenerator';
import QuizGame from './quizMaker/QuizGame';

function App() {
  return (
    <div className='App full-height'>
      {/* 			<Authorizer />  // When yo want to run PTG*/}
      <QuizGame />
    </div>
  );
}

export default App;
