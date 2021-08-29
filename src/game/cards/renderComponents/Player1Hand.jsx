import React, { useContext } from 'react';
import { DeckContext } from '../../../context/DeckContext';

export default function Player1Hand(props) {
	const {
		player1Hp,
		setPlayer1Hp,
		player1Deck,
		setPlayer1Deck,
		player1Hand,
		setPlayer1Hand,
		player1BattlefieldMana,
		setPlayer1BattlefieldMana,
		player1BattlefieldCreatures,
		setPlayer1BattlefieldCreatures,

		player2Hp,
		setPlayer2Hp,
	} = useContext(DeckContext);

	async function drawCard() {
		if (props.player === 'player1') {
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
	}
	return (
		<div
			style={{
				marginTop: '5px',
				paddingTop: '10px',
				marginBottom: '5px',
				paddingBottom: '25px',
				borderTop: '3px solid gray',
				borderBottom: '3px solid gray',
				borderRadius: '30px',
			}}
		>
			<h2 className='margin-t-b-2'>{props.player}</h2>{' '}
			{/* Remove this div when construction complete */}
			<h3 className='margin-t-b-2'>
				Deck size: {JSON.stringify(player1Deck.length)}
			</h3>
			<hr
				style={{
					width: '90%',
				}}
			/>
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
												// add card to battlefield
												let newBattlefieldCreatures = [
													...player1BattlefieldCreatures,
												];
												newBattlefieldCreatures.push(card);
												setPlayer1BattlefieldCreatures(newBattlefieldCreatures);

												// remove card from player hand
												let newPlayerHand = [...player1Hand];
												newPlayerHand.splice(index, 1);
												setPlayer1Hand(newPlayerHand);
											}

											if (card.type === 'instant') {
												if (card.damage > 0) {
													const player = 'player1'; // TODO: refactor to get player value as prop
													if (player === 'player1') {
														let newHp = player2Hp;
														newHp = newHp - card.damage;
														setPlayer2Hp(newHp);
													}
													// TODO: add deal damage to player1
												}
												// instants are never summoned to battlefield,
												// so we will handle instant effect here

												// remove card from player hand
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
