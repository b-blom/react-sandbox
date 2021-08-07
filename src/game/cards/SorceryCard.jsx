import React, { useState, useContext } from 'react';
import "./Card.css";


export default function SorceryCard(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="playing-card support-card">
      <button className="card-button" onClick={() => { showMenu ? setShowMenu(false) : setShowMenu(true); }}>

        <h6> {props.card.sorceryName}</h6>
        <div className="card-image">
          {props.card.sorceryImage}
        </div>
      </button>
      {showMenu &&

        <div className="ability-button sorcery-selected">
          {props.activeCard(props.card, props.id)}
          <p className="small-font">
            {props.card.sorceryDescription}
          </p>
          <p className="small-font">
            cost: {props.card.sorceryCost}
          </p>
        </div>
      }
    </div>
  );
}
