import React from 'react';
import "./Card.css";

export default function InstantCard(props) {
  return (
    <div className="playing-card">
      <h6>{props.card.instantName}</h6>
      <div className="creature-image">
        {props.card.instantImage}
      </div>
      <div className="ability-button">
        <p className="small-font">
          {props.card.instantDescription}
        </p>
        <p className="small-font">
          cost: {props.card.instantCost}
        </p>
      </div>
    </div>
  );
}
