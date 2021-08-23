import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';

export default function Arena() {
	const { player1Deck, setPlayer1Deck } = useContext(DeckContext);

	const [drawedCard, setDrawedCard] = useState('draw a care');

	console.log('Arena p1Deck', player1Deck);
	return (
		<div>
			<h2>arena</h2>
			<pre>{JSON.stringify(player1Deck)}</pre>
			<h2>player1</h2>
			<h3>number of cards in deck {JSON.stringify(player1Deck.length)}</h3>
			<button
				onClick={() => {
					const randomNumber = Math.floor(Math.random() * player1Deck.length);

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
	);
}
