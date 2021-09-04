import React, { useContext } from 'react';
import { DeckContext } from '../../context/DeckContext';

export default function CurrentAction() {
	const { actionMessage, setActionMessage } = useContext(DeckContext);
	return (
		<div>
			<p>
				<strong>{actionMessage}</strong>
			</p>

			{actionMessage.length > 0 && (
				<button className='arena-button' onClick={() => setActionMessage('')}>
					clear
				</button>
			)}
		</div>
	);
}
