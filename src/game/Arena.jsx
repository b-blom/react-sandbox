import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';
import PlayerHand from './cards/renderComponents/PlayerHand';
import ManaCard from './cards/ManaCard';
import CreatureCard from './cards/CreatureCardV2';

export default function Arena() {
	const {
		player1Hp,
		setPlayer1Hp,
		player1Deck,
		setPlayer1Deck,
		player1BattlefieldMana,
		setPlayer1BattlefieldMana,
		player1BattlefieldCreatures,
		setPlayer1BattlefieldCreatures,

		player2Hp,
		setPlayer2Hp,
	} = useContext(DeckContext);

	const dealDamage = (player, damage) => {
		console.log('p2hp', player2Hp);
		if ((player = 'player1')) {
			let newHp = player2Hp;
			newHp = newHp - damage;
			setPlayer2Hp(newHp);
		}
		if ((player = 'player2')) {
			let newHp = player1Hp;
			newHp = newHp - damage;
			setPlayer1Hp(newHp);
		}
	};

	return (
		<div className='arena'>
			<h2>arena</h2>
			<div className='col flex-grow full-height'>
				<div className='row flex-between '>
					<div className='col '>
						<h2 className='margin-t-b-2'>player1</h2>
						<h3 className='margin-t-b-2'>
							Deck size: {JSON.stringify(player1Deck.length)}
						</h3>
						<PlayerHand />
					</div>
					<div
						id='battlefield-main-window'
						className='col black-border flex-stretch flex-grow'
						style={{ minHeight: '600px' }}
					>
						<div id='battlefield-header' className='row'>
							<h4>
								p1 hp: <span style={{ fontSize: '20px' }}>{player1Hp}</span>
							</h4>
							<h2>battlefield</h2>

							<h4>
								<span style={{ fontSize: '20px' }}>{player2Hp}</span> :p2 hp
							</h4>
						</div>
						<div className='row'>
							<div className='battlefield-player-wrapper'>
								<h3>player 1 side</h3>
								<div className='col'>
									{' '}
									{/* Refactor height constraint to something better */}
									<div className='row'>
										<div className='col'>
											{player1BattlefieldMana.map((card, index) => {
												if (card.type === 'mana') {
													return (
														<ManaCard card={card} key={index} summoned={true} />
													);
												}
												return 'no card type to render';
											})}
										</div>
										<div className='row flex-wrap'>
											{player1BattlefieldCreatures.map((card, index) => {
												return (
													<CreatureCard
														card={card}
														key={index}
														summoned={true}
														attack={() => dealDamage('player1', card.strength)}
													/>
												);
											})}
										</div>
									</div>
								</div>
							</div>
							<div className='battlefield-player-wrapper'>
								<h3>player 2 side</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
