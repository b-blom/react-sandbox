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
		player1BattlefieldCreatures,
		setPlayer1BattlefieldCreatures,
	} = useContext(DeckContext);

	async function drawCard() {
		if (player1Deck.length <= 0) {
			alert('player1Deck is empty');
			return;
		}
		if (player1Hand.length >= 10) {
			alert('player1Hand is full');
			return;
		}
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
		<div
			style={{
				marginTop: '5px',
				paddingTop: '10px',
				borderTop: '3px solid gray',
				borderRadius: '30px',
			}}
		>
			<button
				onClick={() => {
					drawCard();
				}}
			>
				draw card
			</button>
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
								<td style={{ textAlign: 'end' }}>{card.name}</td>
								<td>{card.image}</td>
								<td>{card.type}</td>
								<td>
									<button
										onClick={() => {
											if (card.type === 'mana') {
												// add card to battlefield
												let newBattleFieldMana = [...player1BattlefieldMana];
												newBattleFieldMana.push(card);
												setPlayer1BattlefieldMana(newBattleFieldMana);

												//remove card from player hand
												let newPlayerHand = [...player1Hand];
												newPlayerHand.splice(index, 1);
												setPlayer1Hand(newPlayerHand);
											}

											if (card.type === 'creature') {
												let newBattlefieldCreatures = [
													...player1BattlefieldCreatures,
												];
												newBattlefieldCreatures.push(card);
												setPlayer1BattlefieldCreatures(newBattlefieldCreatures);

												let newPlayerHand = [...player1Hand];
												newPlayerHand.splice(index, 1);
												setPlayer1Hand(newPlayerHand);
											}

											if (card.type === 'instant') {
												alert('used instant card ' + card.name);
												let newPlayerHand = [...player1Hand];
												newPlayerHand.splice(index, 1);
												setPlayer1Hand(newPlayerHand);
											}
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
		</div>
	);
}
