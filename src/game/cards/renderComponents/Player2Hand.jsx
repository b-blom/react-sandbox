import React, { useContext } from 'react';
import { DeckContext } from '../../../context/DeckContext';

export default function Player2Hand(props) {
	const {
		player1Hp,
		setPlayer1Hp,

		player2Hp,
		setPlayer2Hp,
		player2Deck,
		setPlayer2Deck,
		player2Hand,
		setPlayer2Hand,
		player2BattlefieldMana,
		setPlayer2BattlefieldMana,
		player2BattlefieldCreatures,
		setPlayer2BattlefieldCreatures,
	} = useContext(DeckContext);

	async function drawCard() {
		if (player2Deck.length <= 0) {
			alert('player2Deck is empty');
			return;
		}
		if (player2Hand.length >= 10) {
			alert('player2Hand is full');
			return;
		}
		const randomNumber = Math.floor(Math.random() * player2Deck.length);

		let newHand = [...player2Hand];
		newHand.push(player2Deck[randomNumber]);
		setPlayer2Hand(newHand);

		let newDeck = [...player2Deck];
		newDeck.splice(randomNumber, 1);
		setPlayer2Deck(newDeck);
	}
	return (
		<div className='player-hand'>
			<h2 className='margin-t-b-2'>{props.player}</h2>
			<h3 className='margin-t-b-2'>
				Deck size: {JSON.stringify(player2Deck.length)}
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
						<th>summon</th>
					</tr>
				</thead>
				<tbody>
					{player2Hand.map((card, index) => {
						return (
							<tr key={index}>
								<td style={{ textAlign: 'end' }}>{card.name}</td>
								<td>{card.image}</td>
								<td>{card.type}</td>
								<td>
									<button
										onClick={() => {
											if (card.type === 'mana') {
												let newBattleFieldMana = [...player2BattlefieldMana];
												newBattleFieldMana.push(card);
												setPlayer2BattlefieldMana(newBattleFieldMana);

												let newPlayerHand = [...player2Hand];
												newPlayerHand.splice(index, 1);
												setPlayer2Hand(newPlayerHand);
											}

											if (card.type === 'creature') {
												let newBattlefieldCreatures = [
													...player2BattlefieldCreatures,
												];
												newBattlefieldCreatures.push(card);
												setPlayer2BattlefieldCreatures(newBattlefieldCreatures);

												let newPlayerHand = [...player2Hand];
												newPlayerHand.splice(index, 1);
												setPlayer2Hand(newPlayerHand);
											}

											if (card.type === 'instant') {
												const battlefieldMana = [...player2BattlefieldMana];

												let manaIndexToTap = [];

												// find all untapped mana
												battlefieldMana.forEach((card, index) => {
													if (!card.tapped) manaIndexToTap.push(index);
												});

												// check if we have enough mana
												if (manaIndexToTap.length < card.cost) {
													alert('not enough mana');
													return;
												}

												// tap the required mana cards

												for (var i = 0; i < card.cost; i++) {
													const manaCardToTap = manaIndexToTap[i];
													battlefieldMana[manaCardToTap].tapped = true;
												}

												// deal damage
												if (card.damage > 0) {
													const player = 'player2';
													if (player === 'player2') {
														let newHp = player1Hp;
														newHp = newHp - card.damage;
														setPlayer1Hp(newHp);
													}
												}
												// instants are never summoned to battlefield,
												// so we will handle instant effect here

												// remove card from player hand
												let newPlayerHand = [...player2Hand];
												newPlayerHand.splice(index, 1);
												setPlayer2Hand(newPlayerHand);
											}
										}}
									>
										{card.type === 'instant' ? `cast: ${card.cost}` : 'summon'}
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
