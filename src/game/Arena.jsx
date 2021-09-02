import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';
import Player1Hand from './cards/renderComponents/Player1Hand';
import Player2Hand from './cards/renderComponents/Player2Hand';
import ManaCard from './cards/ManaCard';
import CreatureCard from './cards/CreatureCardV2';

export default function Arena() {
	const {
		activePlayer,
		setActivePlayer,

		player1Hp,
		setPlayer1Hp,
		player1Deck,
		setPlayer1Deck,
		player1BattlefieldMana,
		player1BattlefieldInstant,
		setPlayer1BattlefieldInstant,
		setPlayer1BattlefieldMana,
		player1BattlefieldCreatures,
		setPlayer1BattlefieldCreatures,

		player2Hp,
		setPlayer2Hp,
		player2Deck,
		setPlayer2Deck,
		player2BattlefieldMana,
		player2BattlefieldInstant,
		setPlayer2BattlefieldInstant,
		setPlayer2BattlefieldMana,
		player2BattlefieldCreatures,
		setPlayer2BattlefieldCreatures,
	} = useContext(DeckContext);

	const [hidePlayer1, setHidePlayer1] = useState(false);
	const [hidePlayer2, setHidePlayer2] = useState(false);

	const dealDamage = (player, damage) => {
		console.log('p2hp', player2Hp);
		if (player === 'player1') {
			let newHp = player2Hp;
			newHp = newHp - damage;
			setPlayer2Hp(newHp);
		}
		if (player === 'player2') {
			let newHp = player1Hp;
			newHp = newHp - damage;
			setPlayer1Hp(newHp);
		}
	};

	return (
		<div className='arena game-wrapper  image-background'>
			<h2>arena</h2>
			<button
				className='arena-button'
				style={{ width: '100px', margin: '0 auto' }}
				onClick={() => {
					if (activePlayer === 'player1') {
						setActivePlayer('player2');
					} else {
						setActivePlayer('player1');
					}
					setHidePlayer1(false);
					setHidePlayer2(false);
				}}
			>
				Toggle active player
			</button>
			{/* TODO: Add an action log  */}
			<div className='col flex-grow full-height'>
				<div className='row flex-between '>
					<div id='player-1-hand-wrapper'>
						{activePlayer === 'player1' && (
							<button
								className='arena-button'
								style={{ width: '75%', height: '40px' }}
								onClick={() => {
									setHidePlayer1(!hidePlayer1);
								}}
							>
								{hidePlayer1 ? 'show hand' : 'hide hand'}{' '}
							</button>
						)}
						<div
							className='col'
							style={
								activePlayer === 'player1' && !hidePlayer1
									? null
									: {
											opacity: '0%',
									  }
							}
						>
							<Player1Hand player='player1' opponent='player2' />
						</div>
					</div>
					<div className=' col flex-stretch flex-grow battlefield-background'>
						<div
							id='battlefield-main-window'
							className=' battlefield-content '
							style={{ minHeight: '600px' }}
						>
							<div id='battlefield-header' className='row battlefield-header'>
								<h4>
									p1 hp: <span style={{ fontSize: '20px' }}>{player1Hp}</span>
								</h4>
								<h2>battlefield</h2>{' '}
								{/* TODO: add or replace with actionMessage */}
								<h4>
									<span style={{ fontSize: '20px' }}>{player2Hp}</span> :p2 hp
								</h4>
							</div>
							{player1Hp <= 0 && <h1>PLAYER 2 wins</h1>}
							{player2Hp <= 0 && <h1>PLAYER 1 wins</h1>}
							{player1Hp > 0 && player2Hp > 0 && (
								<div className='row'>
									<div className='battlefield-player-wrapper'>
										<h3>player 1 side</h3>
										<div className='col'>
											{/* Refactor height constraint to something better */}
											<div className='row'>
												<div className='col'>
													{player1BattlefieldMana.map((card, index) => {
														if (card.type === 'mana') {
															return (
																<ManaCard
																	card={card}
																	key={index}
																	summoned={true}
																/>
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
																tapped={false}
																attack={() =>
																	dealDamage('player1', card.strength)
																}
															/>
														);
													})}
												</div>
											</div>
										</div>
									</div>
									<div className='battlefield-player-wrapper'>
										<h3>player 2 side</h3>
										<div className='col'>
											{/* Refactor height constraint to something better */}
											<div className='row-reverse'>
												<div className='col'>
													{player2BattlefieldMana.map((card, index) => {
														if (card.type === 'mana') {
															return (
																<ManaCard
																	card={card}
																	key={index}
																	summoned={true}
																/>
															);
														}
														return 'no card type to render';
													})}
												</div>
												<div className='row flex-wrap'>
													{player2BattlefieldCreatures.map((card, index) => {
														return (
															<CreatureCard
																card={card}
																key={index}
																summoned={true}
																attack={() =>
																	dealDamage('player2', card.strength)
																}
															/>
														);
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
					<div id='player-2-hand-wrapper'>
						{activePlayer === 'player2' && (
							<button
								className='arena-button'
								style={{ width: '75%', height: '40px' }}
								onClick={() => {
									setHidePlayer2(!hidePlayer2);
								}}
							>
								{hidePlayer2 ? 'show hand' : 'hide hand'}
							</button>
						)}
						<div
							className='col'
							style={
								activePlayer === 'player2' && !hidePlayer2
									? null
									: { opacity: '0%' }
							}
						>
							<Player2Hand />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
