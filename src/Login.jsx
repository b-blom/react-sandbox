import React from 'react';

export default function Login(props) {
	return (
		<div>
			<button onClick={() => props.login()}>log in</button>
		</div>
	);
}
