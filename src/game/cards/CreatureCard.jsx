import React, { useState } from 'react';
import './Card.css';

export default function CreatureCard(props) {
	const [big, setBig] = useState(false);
	return (
		<div className='playing-card creature-card'>
			<h6>
				{props.card.creatureName || props.card.name} {'  '}
				<span style={{ fontStyle: 'italic', fontWeight: '300' }}>
					{props.card.strength}/{props.card.health || props.card.defense}
				</span>
			</h6>
			{props.creatureStatus && props.creatureStatus.length > 0 && (
				<p>
					status:{' '}
					{props.creatureStatus.map((status) => {
						return <span>{status.statusImage}</span>;
					})}
				</p>
			)}
			<div className='card-image'>
				{props.card.creatureImage || props.card.image}
			</div>
			{!props.deckCreator ? (
				props.summoned ? (
					<button
						className='utility-button'
						onClick={() => props.creatureAttack(props.card)}
					>
						Attack
					</button>
				) : (
					<button
						className='utility-button'
						onClick={() => {
							props.summonCreature(props.card, props.id);
						}}
					>
						Summon
					</button>
				)
			) : null}
			{!props.deckCreator ? (
				big ? (
					<button
						className='utility-button'
						onClick={() => {
							console.log('hide', props.card.creatureName);
							setBig(false);
						}}
					>
						hide menu
					</button>
				) : (
					<button
						className='utility-button'
						onClick={() => {
							console.log(`open`, props.card.creatureName, ':', props.card);
							setBig(true);
						}}
					>
						open menu
					</button>
				)
			) : null}
			{!props.deckCreator
				? big &&
				  props.card.abilities.map((ability, index) => {
						return (
							<div className='ability-button' id={index}>
								<p className='small-font '>
									<span>
										<b>{ability.abilityName}</b>
									</span>
									:
									<span style={{ fontStyle: 'italic' }}>
										{ability.abilityFeature}
									</span>
								</p>
								<p className='small-font'>cost: {ability.abilityCost}</p>
								<button
									onClick={() => {
										console.log('activateAbility(ability)');
									}}
								>
									Activate
								</button>
							</div>
						);
				  })
				: null}
		</div>
	);
}
