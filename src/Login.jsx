import React, { useState } from 'react';

export default function Login(props) {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  return (
    <div>
      <p>what yor name boi</p>
      <input
        type='text'
        value={player1Name}
        onChange={(event) => setPlayer1Name(event.target.value)}
      />
      <br />
      <p>who de enemi</p>
      <input
        type='text'
        value={player2Name}
        onChange={(event) => setPlayer2Name(event.target.value)}
      />

      <button onClick={() => props.login(player1Name, player2Name)}>
        log in
      </button>
    </div>
  );
}
