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
          <button onClick={() => setLoggedIn(false)}>log out</button>
          {loggedIn && 'name placeholder'}
          <GameRouter logout={() => setLoggedIn(false)} />
        </div>
      ) : (
        <Login login={() => setLoggedIn(true)} />
      )}
    </div>
  );
}
