import React, { useState } from 'react';
import "./Card.css";

export default function InstantCard(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="playing-card support-card">
      <button className="card-button" onClick={() => { showMenu ? setShowMenu(false) : setShowMenu(true); }}>
        <h6>{props.card.instantName}</h6>
        <p>index: {props.id}</p>
        <div className="card-image">
          {props.card.instantImage}
        </div>
      </button>
      {showMenu &&
        <div className="ability-button" onClick={() => {
          console.log(`cast  ${props.card.instantName} for ${props.card.instantDamage} damage`);
          props.dealDamage(props.card.instantDamage, props.card.instantCost, props.id);
        }}>
          <p className="small-font">
            {props.card.instantDescription}
          </p>
          <p className="small-font">
            cost: {props.card.instantCost}
          </p>
        </div>
      }
    </div >
  );
}
