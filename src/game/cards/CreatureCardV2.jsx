import React from 'react';

export default function CreatureCardV2(props) {
	return (
		<div className='playing-card'>
			<button className='card-button'>
				<h6> {props.card.name} </h6>
				<div className='card-image'>{props.card.image}</div>
				<p>{props.card.type}</p>
			</button>
		</div>
	);
}
