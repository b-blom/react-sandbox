import React, { useState } from 'react';

export default function Login(props) {
  const [playerName, setPlayerName] = useState('');
  return (
    <div>
      <p>what yor name boi</p>
      <input
        type='text'
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
      <button
        onClick={async () => {
          if (playerName === '') {
            props.login('boy');
          } else {
            props.login(playerName);
          }
        }}>
        log in
      </button>
    </div>
  );
}
