import React from 'react';
import InstantCardCreator from './pageComponents/InstantCardCreator';
import ManaCardCreator from './pageComponents/ManaCardCreator';
import CreatureCardCreator from './pageComponents/CreatureCardCreator';
export default function ContentCreator() {
	return (
		<div className='row flex-wrap'>
			<div className='black-border card-creator-wrapper'>
				<CreatureCardCreator />
			</div>
			<div className='black-border card-creator-wrapper'>
				<ManaCardCreator />
			</div>
			<div className='black-border card-creator-wrapper'>
				<InstantCardCreator />
			</div>
			{/* implement SorceryCardCreator */}
		</div>
	);
}
