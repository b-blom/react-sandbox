import React, { useState } from 'react';
import './Card.css';

export default function CreatureCard(props) {
	const [big, setBig] = useState(false);
	return (
		<div className='playing-card creature-card'>
			<h6>
				{props.card.creatureName || props.card.name} {'  '}
				<span style={{ fontStyle: 'italic', fontWeight: '300' }}>
					{props.card.strength || props.card.damage}/
					{props.card.health || props.card.defense}
				</span>
			</h6>
			<h6 style={{ marginTop: '0px' }}>
				<span
					style={{ fontStyle: 'italic', fontWeight: '300', marginTop: '0px' }}
				>
					{props.card.type}
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
			{props.deckCreator && props.card.ability && (
				<div className='ability-button'>
					<p className='small-font '>
						<span>
							<b>{props.card.ability}</b>
						</span>
						:{' '}
						<span style={{ fontStyle: 'italic' }}>
							{props.card.abilityDescription}
						</span>
					</p>
					<p className='small-font'>cost: {props.card.abilityCost}</p>
				</div>
			)}
			{props.card.type === 'instant' && (
				<div className='ability-button'>
					<p className='small-font '>
						<span style={{ fontStyle: 'italic' }}>
							{props.card.description}
						</span>
					</p>
					<p className='small-font'>cost: {props.card.cost}</p>
				</div>
			)}
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
							setBig(false);
						}}
					>
						hide menu
					</button>
				) : (
					<button
						className='utility-button'
						onClick={() => {
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
