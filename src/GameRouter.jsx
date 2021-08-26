import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Game from './game/Game';
import Home from './game/Home';
import ContentCreator from './pages/ContentCreator';
import DeckCreator from './pages/pageComponents/DeckCreator';
import Arena from './game/Arena';
import { DeckContext } from './context/DeckContext';

export default function GameRouter() {
	const [player1Deck, setPlayer1Deck] = useState([]);
	const [player1Hand, setPlayer1Hand] = useState([]);

	return (
		<DeckContext.Provider
			value={{ player1Deck, setPlayer1Deck, player1Hand, setPlayer1Hand }}
		>
			<Router>
				<ul
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						padding: '15px',
						borderBottom: '3px solid black',
					}}
				>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/createcards'>Create card</Link>
					</li>
					<li>
						<Link to='/createdeck'>Create deck</Link>
					</li>
					<li>
						<Link to='/arena'>Arena</Link>
					</li>
					<li>
						<Link to='/game'>Play field</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/createcards'>
						<ContentCreator />
					</Route>
					<Route path='/createdeck'>
						<DeckCreator />
					</Route>
					<Route path='/game'>
						<Game />
					</Route>
					<Route path='/arena'>
						<Arena />
					</Route>
				</Switch>
			</Router>
		</DeckContext.Provider>
	);
}
