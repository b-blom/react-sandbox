import React from 'react';
import "./Card.css";

export default function SorceryCard(props) {
  return (
    <div className="playing-card sorcery-card">
      <h6> {props.card.sorceryName} </h6>
      <div className="creature-image">
        {props.card.sorceryImage}
      </div>
      <div className="ability-button">
        <p className="small-font">
          {props.card.sorceryDescription}
        </p>
        <p className="small-font">
          cost: {props.card.sorceryCost}
        </p>
      </div>
    </div>
  );
}
