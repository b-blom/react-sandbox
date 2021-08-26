import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';
import PlayerHand from './cards/renderComponents/PlayerHand';

export default function Arena() {
	const { player1Deck, setPlayer1Deck } = useContext(DeckContext);

	const [drawedCard, setDrawedCard] = useState('draw a care');

	return (
		<div>
			<h2>arena</h2>
			<div className='row flex-evenly'>
				<div className='col'>
					<h2>player1</h2>
					<PlayerHand />
				</div>
				<div className='col'>
					<h3>number of cards in deck {JSON.stringify(player1Deck.length)}</h3>
					<button
						onClick={() => {
							const randomNumber = Math.floor(
								Math.random() * player1Deck.length
							);

							setDrawedCard(player1Deck[randomNumber]);
							const newArray = [...player1Deck];
							newArray.splice(randomNumber, 1);
							setPlayer1Deck(newArray);
						}}
					>
						draw card
					</button>
					<h3>drawed card</h3>
					<pre>{JSON.stringify(drawedCard)}</pre>
				</div>
			</div>
		</div>
	);
}
