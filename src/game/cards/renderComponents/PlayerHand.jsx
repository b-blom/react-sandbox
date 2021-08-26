import React, { useContext } from 'react';
import { DeckContext } from '../../../context/DeckContext';

export default function PlayerHand() {
	const { player1Deck, setPlayer1Deck, player1Hand, setPlayer1Hand } =
		useContext(DeckContext);

	const drawCard = () => {
		// get a random number which represent which card to draw from the deck
		console.log('player1Deck', player1Deck);
		const randomNumber = Math.floor(Math.random() * player1Deck.length);
		console.log(randomNumber);

		// place the selected card into player hand
		const newHand = [...player1Hand];
		newHand.push(player1Deck[randomNumber]);
		setPlayer1Hand(newHand);

		// remove the selected card from player deck
		const newDeck = [...player1Deck];
		newDeck.splice(randomNumber, 1);
		setPlayer1Deck(newDeck);
	};

	const drawFullHand = () => {
		const currentHand = [...player1Hand];
		console.log('currentHand', currentHand);
		if (currentHand.length < 7) {
			drawCard();
		}
	};
	console.log('player1Hand', player1Hand);
	return (
		<div>
			<h3>player 1 hand</h3>
			<div className='row'>
				<button
					onClick={() => {
						drawCard();
					}}
				>
					draw single card
				</button>
				<button onClick={() => drawFullHand()}>draw full hand </button>
			</div>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>image</th>
						<th>type</th>
					</tr>
				</thead>
				<tbody>
					{player1Hand.map((card, index) => {
						return (
							<tr key={index}>
								<td>{card.name}</td>
								<td>{card.image}</td>
								<td>{card.type}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* Render cards and use ifs to decide which components to render (<InstantCard/> for intstant cards etc) */}
			{/* <div className='row'>
				{player1Hand &&
					player1Hand.map((card) => {
						return <p>{card.name}</p>;
					})}
			</div> */}
		</div>
	);
}
