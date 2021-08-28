import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Game from './game/Game';
import Home from './game/Home';
import ContentCreator from './pages/ContentCreator';
import DeckCreator from './pages/pageComponents/DeckCreator';
import Arena from './game/Arena';
import { DeckContext } from './context/DeckContext';

export default function GameRouter() {
	const [activePlayer, setActivePlayer] = useState('player1');

	const [player1Hp, setPlayer1Hp] = useState(20);
	const [player1Deck, setPlayer1Deck] = useState([]);
	const [player1Hand, setPlayer1Hand] = useState([]);
	const [player1BattlefieldMana, setPlayer1BattlefieldMana] = useState([]);
	const [player1BattlefieldInstant, setPlayer1BattlefieldInstant] =
		useState(null);
	const [player1BattlefieldCreatures, setPlayer1BattlefieldCreatures] =
		useState([]);

	const [player2Hp, setPlayer2Hp] = useState(20);
	return (
		<DeckContext.Provider
			value={{
				activePlayer,
				setActivePlayer,

				player1Hp,
				setPlayer1Hp,
				player1Deck,
				setPlayer1Deck,
				player1Hand,
				setPlayer1Hand,
				player1BattlefieldMana,
				setPlayer1BattlefieldMana,
				player1BattlefieldInstant,
				setPlayer1BattlefieldInstant,
				player1BattlefieldCreatures,
				setPlayer1BattlefieldCreatures,

				player2Hp,
				setPlayer2Hp,
			}}
		>
			<Router>
				<div style={{ height: '55px' }}>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							padding: '15px',
							borderBottom: '3px solid black',
						}}
					>
						{/* TODO: create a playable dummy deck */}
						<button
							onClick={() =>
								setPlayer1Deck([
									{
										__typename: 'ManaCard',
										image: '🔥',
										name: 'Fire',
										type: 'mana',
									},
									{
										__typename: 'ManaCard',
										image: '🧊',
										name: 'Ice',
										type: 'mana',
									},
									{
										__typename: 'ManaCard',
										image: '🌍',
										name: 'Earth',
										type: 'mana',
									},
									{
										__typename: 'ManaCard',
										image: '🌌',
										name: 'Space',
										type: 'mana',
									},
									{
										__typename: 'CreatureCard',
										ability: 'poop',
										abilityCost: 1,
										abilityDescription:
											'poop on opponent. opponent must go clean up and cannot do any other actions this turn',
										defense: 1,
										image: '🐦',
										name: 'bird',
										strength: 1,
										type: 'creature',
									},
									{
										__typename: 'CreatureCard',
										ability: 'poop',
										abilityCost: 1,
										abilityDescription:
											'poop on opponent. opponent must go clean up and cannot do any other actions this turn',
										defense: 1,
										image: '🐦',
										name: 'bird',
										strength: 1,
										type: 'creature',
									},
									{
										__typename: 'CreatureCard',
										ability: 'poop',
										abilityCost: 1,
										abilityDescription:
											'poop on opponent. opponent must go clean up and cannot do any other actions this turn',
										defense: 1,
										image: '🐦',
										name: 'bird',
										strength: 1,
										type: 'creature',
									},
									{
										__typename: 'CreatureCard',
										ability: 'poop',
										abilityCost: 1,
										abilityDescription:
											'poop on opponent. opponent must go clean up and cannot do any other actions this turn',
										defense: 1,
										image: '🐦',
										name: 'bird',
										strength: 1,
										type: 'creature',
									},
									{
										__typename: 'InstantCard',
										cost: 1,
										damage: 3,
										defense: 0,
										description: '3 damage to anything',
										image: '⚡',
										name: 'bolt',
										type: 'instant',
									},
									{
										__typename: 'InstantCard',
										cost: 1,
										damage: 3,
										defense: 0,
										description: '3 damage to anything',
										image: '⚡',
										name: 'bolt',
										type: 'instant',
									},
								])
							}
						>
							set dummy deck
						</button>
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
				</div>
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
