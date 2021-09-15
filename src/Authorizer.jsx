import React, { useState } from 'react';
import Login from './Login';
import GameRouter from './GameRouter';

export default function Authorizer() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loggedInUser, setLoggedInUser] = useState(null);

	return (
		<div>
			{loggedIn ? (
				<div>
					{/* 	// <GameRouter logout={() => setLoggedIn(false)} /> */}
					{loggedIn && 'name placeholder'}
					<br />
					<button onClick={() => setLoggedIn(false)}>log out</button>
				</div>
			) : (
				<Login login={() => setLoggedIn(true)} />
			)}
		</div>
	);
}
