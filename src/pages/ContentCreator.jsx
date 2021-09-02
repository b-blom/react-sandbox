import React from 'react';
import InstantCardCreator from './pageComponents/InstantCardCreator';
import ManaCardCreator from './pageComponents/ManaCardCreator';
import CreatureCardCreator from './pageComponents/CreatureCardCreator';
export default function ContentCreator() {
	return (
		<div className='row'>
			<div className='black-border'>
				<CreatureCardCreator />
			</div>
			<div className='black-border'>
				<ManaCardCreator />
			</div>
			<div className='black-border'>
				<InstantCardCreator />
			</div>
			{/* implement SorceryCardCreator */}
		</div>
	);
}
