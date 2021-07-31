import React from 'react';
import "./Card.css";

export default function ManaCard(props) {
  console.log("props", props);
  return (
    <div className="mana-card playing-card">
      <h6>Mana</h6>
      <div className="mana-color">
        <div className="mana-image">
          {props.card.manaImage}
        </div>
      </div>
    </div>
  );
}
