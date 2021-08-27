import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';
import PlayerHand from './cards/renderComponents/PlayerHand';
import ManaCard from './cards/ManaCard';

export default function Arena() {
	const {
		player1Deck,
		setPlayer1Deck,
		player1BattlefieldMana,
		setPlayer1BattlefieldMana,
	} = useContext(DeckContext);

	return (
		<div>
			<h2>arena</h2>
			<div className='row flex-evenly'>
				<div className='col'>
					<h2>player1</h2>
					<h3>Deck size: {JSON.stringify(player1Deck.length)}</h3>
					<PlayerHand />
				</div>
				<div className='col black-border'>
					<h2>battlefield</h2>
					<div className='col'>
						{player1BattlefieldMana.map((card, index) => {
							return <ManaCard card={card} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
