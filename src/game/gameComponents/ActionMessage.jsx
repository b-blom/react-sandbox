import React from 'react';

export default function CurrentAction(props) {
	return (
		<div className='board-element action-board'>
			{props.message && (
				<p>
					<strong>{props.message}</strong>
				</p>
			)}
			<button onClick={props.clear}>clear</button>
		</div>
	);
}
