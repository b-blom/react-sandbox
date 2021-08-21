import React, { useContext } from 'react';
import { SelectedSorceryCardContext } from '../../context/SorceryContext';

export default function PlayGame(props) {
	const { player1, setPlayer, player1Deck, setPlayer1Deck } = useContext(
		SelectedSorceryCardContext
	);
	return (
		<div>
			<h2>
				name: {player1.playerName} <span>hp: {player1.hp}</span>
			</h2>

			{player1Deck &&
				player1Deck.map((card) => {
					return <h3>deck pf cards go here</h3>;
				})}
		</div>
	);
}
