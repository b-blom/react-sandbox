import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';
import PlayerHand from './cards/renderComponents/PlayerHand';
import ManaCard from './cards/ManaCard';
import CreatureCard from './cards/CreatureCard';

export default function Arena() {
	const {
		player1Deck,
		setPlayer1Deck,
		player1BattlefieldMana,
		setPlayer1BattlefieldMana,
		player1BattlefieldCreatures,
		setPlayer1BattlefieldCreatures,
	} = useContext(DeckContext);

	return (
		<div className='arena'>
			<h2>arena</h2>
			<div className='col flex-grow'>
				<div className='row flex-between '>
					<div className='col '>
						<h2>player1</h2>
						<h3>Deck size: {JSON.stringify(player1Deck.length)}</h3>
						<PlayerHand />
					</div>
					<div className='col black-border flex-grow'>
						<h2>battlefield</h2>
						<div className='row black-border'>
							<div className='col flex-grow'>
								<h3>player 1 side</h3>
								<div className='col'>
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
										<div className='col'>
											{player1BattlefieldCreatures.map((card, index) => {
												return (
													<CreatureCard
														card={card}
														key={index}
														summoned={true}
													/>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<div className='col flex-grow full-height' style={{ flex: 2 }}>
								<h3>player 2side</h3>
								{/* {player1BattlefieldMana.map((card, index) => {
									if (card.type === 'mana') {
										return <ManaCard card={card} key={index} />;
									}
									return 'no card type to render';
								})}
								<div className='col'>
									{player1BattlefieldCreatures.map((card, index) => {
										return <CreatureCard card={card} key={index} />;
									})}
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
