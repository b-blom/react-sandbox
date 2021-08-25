import React from 'react';
import InstantCardCreator from './pageComponents/InstantCardCreator';
import ManaCardCreator from './pageComponents/ManaCardCreator';
import CreatureCardCreator from './pageComponents/CreatureCardCreator';
export default function ContentCreator() {
	return (
		<div>
			<div className='black-border row'>
				<div className='black-border'>
					<CreatureCardCreator />
				</div>
				<div className='black-border' style={{ width: '40%' }}>
					<ManaCardCreator />
				</div>
				<div className='black-border' style={{ width: '40%' }}>
					<InstantCardCreator />
				</div>
			</div>
			{/*  <ViewCard />
			 */}
		</div>
	);
}
