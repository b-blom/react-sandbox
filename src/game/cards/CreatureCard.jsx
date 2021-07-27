import React from 'react';
import "./Card.css";

export default function CreatureCard() {
  return (
    <div>
      <div className="playing-card creature-card">
        <h6>Creature</h6>
        <button className="small-text button" onClick={console.log("attack clicked")} >attack</button>
      </div>
    </div>
  );
}
