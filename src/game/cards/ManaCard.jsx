import React from 'react';
import "./Card.css";

export default function ManaCard(props) {
  console.log("props", props);
  return (
    <div className="mana-card playing-card">
      <h6>Mana</h6>
      <div className="mana-color">
        <p style={{ color: "white" }}>{props.card.manaType}</p>
      </div>
    </div>
  );
}
