import React, { useState } from 'react';
import Login from './Login';
import GameRouter from './GameRouter';

export default function Authorizer() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleLogin = (p1Name, p2Name) => {
    console.log('logging in');
    setPlayer1Name(p1Name || 'boy');
    setPlayer2Name(p2Name || 'villain');
    setLoggedIn(true);
  };
  const handleLogout = () => {
    console.log('logging out');
    setPlayer1Name('');
    setPlayer2Name('');
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>
            {player1Name} vs {player2Name}
          </p>
          <button onClick={() => handleLogout()}>log out</button>

          <GameRouter
            logout={() => setLoggedIn(false)}
            player1Name={player1Name}
            player2Name={player2Name}
          />
        </div>
      ) : (
        <Login login={(p1Name, p2Name) => handleLogin(p1Name, p2Name)} />
      )}
    </div>
  );
}
