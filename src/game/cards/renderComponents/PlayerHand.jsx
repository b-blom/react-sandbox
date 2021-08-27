import React, { useContext } from 'react';
import { DeckContext } from '../../../context/DeckContext';

export default function PlayerHand() {
	const {
		player1Deck,
		setPlayer1Deck,
		player1Hand,
		setPlayer1Hand,
		player1BattlefieldMana,
		setPlayer1BattlefieldMana,
	} = useContext(DeckContext);

	async function drawCard() {
		// get a random number which represent which card to draw from the deck
		const randomNumber = Math.floor(Math.random() * player1Deck.length);

		// place the selected card into player hand
		let newHand = [...player1Hand];
		newHand.push(player1Deck[randomNumber]);
		setPlayer1Hand(newHand);

		// remove the selected card from player deck
		let newDeck = [...player1Deck];
		newDeck.splice(randomNumber, 1);
		setPlayer1Deck(newDeck);
	}

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
			</div>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>image</th>
						<th>type</th>
						<th>summon</th>
					</tr>
				</thead>
				<tbody>
					{player1Hand.map((card, index) => {
						return (
							<tr key={index}>
								<td>{card.name}</td>
								<td>{card.image}</td>
								<td>{card.type}</td>
								<td>
									<button
										onClick={() => {
											console.log('summon to battlefield', card);

											// add card to battlefield
											let newBattleFieldMana = [...player1BattlefieldMana];
											newBattleFieldMana.push(card);
											setPlayer1BattlefieldMana(newBattleFieldMana);

											//remove card from player hand
											let newPlayerHand = [...player1Hand];
											newPlayerHand.splice(index, 1);
											setPlayer1Hand(newPlayerHand);
										}}
									>
										summon
									</button>
								</td>
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
