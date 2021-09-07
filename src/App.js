import './App.css';
import './game/Game.css';
import './game/gameComponents/Action.css';
import Authorizer from './Authorizer';

function App() {
	return (
		<div className='App full-height'>
			<Authorizer />
		</div>
	);
}

export default App;
