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
		if (player1Deck.length <= 0) {
			alert('player1Deck is empty');
			return;
		}
		if (player1Hand.length >= 10) {
			alert('player1Hand is full');
			return;
		}
		const randomNumber = Math.floor(Math.random() * player1Deck.length);

		let newHand = [...player1Hand];
		newHand.push(player1Deck[randomNumber]);
		setPlayer1Hand(newHand);

		let newDeck = [...player1Deck];
		newDeck.splice(randomNumber, 1);
		setPlayer1Deck(newDeck);
	}
	return (
		<div className='player-hand'>
			<h2 className='margin-t-b-2'>{props.player}</h2>
			<h3 className='margin-t-b-2'>
				Deck size: {JSON.stringify(player1Deck.length)}
			</h3>
			<hr
				style={{
					width: '90%',
				}}
			/>
			<button
				className='arena-button'
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
						<th>cost</th>
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
								<td>{card.cost}</td>
								<td>
									<button
										onClick={() => {
											if (card.type === 'mana') {
												let newBattleFieldMana = [...player1BattlefieldMana];
												newBattleFieldMana.push(card);
												setPlayer1BattlefieldMana(newBattleFieldMana);

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
												const battlefieldMana = [...player1BattlefieldMana];
												console.log('battlefieldmana', battlefieldMana);
												let untappedMana = [];
												battlefieldMana.forEach((card, index) => {
													if (card.tapped === false) {
														untappedMana.push({ card: card, key: index });
													}
												});

												console.log('untappedMana', untappedMana);

												if (untappedMana.length >= card.cost) {
													if (card.damage > 0) {
														const player = 'player1';
														if (player === 'player1') {
															let newHp = player2Hp;
															newHp = newHp - card.damage;
															setPlayer2Hp(newHp);
														}
													}

													// tap mana cards

													console.log('manaCArds', player1BattlefieldMana);

													let newBattlefieldMana = [...player1BattlefieldMana];
													console.log('nmbf array', newBattlefieldMana);
													console.log('nmbf', newBattlefieldMana[0]);

													for (let i = 0; i < card.cost; i++) {
														console.log(i);
														newBattlefieldMana[i].tapped = true;

														//console.log('nmbf', newBattlefieldMana[i]);
													}

													// remove card from player hand
													let newPlayerHand = [...player1Hand];
													newPlayerHand.splice(index, 1);
													setPlayer1Hand(newPlayerHand);
												} else {
													alert('not enough mana');
												}
											}
										}}
									>
										{card.type === 'instant' ? `🎆: ${card.cost}` : 'summon'}
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
