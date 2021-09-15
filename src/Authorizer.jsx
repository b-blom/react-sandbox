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
          <p>hello {loggedIn}</p>
          <button onClick={() => setLoggedIn(false)}>log out</button>

          <GameRouter logout={() => setLoggedIn(false)} playerName={loggedIn} />
        </div>
      ) : (
        <Login login={(playerName) => setLoggedIn(playerName)} />
      )}
    </div>
  );
}
