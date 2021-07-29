import React, { useState } from 'react';

export default function Player(props) {
  const [playerHp, setplayerHp] = useState(20);

  if (playerHp <= 0) {
    return (
      <div className="player">
        <p>{props.playerName} is dead</p>
      </div>
    );
  }

  return (
    <div className="player">
      <p>{props.playerName}</p>
      <p>{playerHp}</p>
      <div className="health-adjust-wrapper">
        <button onClick={() => { setplayerHp(playerHp - 1); }} >-</button>
        <button onClick={() => { setplayerHp(playerHp + 1); }}>+</button>
      </div>
    </div>
  );
}
