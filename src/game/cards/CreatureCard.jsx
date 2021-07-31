import React, { useState } from 'react';
import "./Card.css";

export default function CreatureCard(props) {
  const [big, setBig] = useState(false);
  return (
    <div className="playing-card creature-card">
      <h6>{props.card.creatureName} {"  "}
        <span style={{ fontStyle: "italic", fontWeight: "300" }}>
          {props.card.strength}/{props.card.health}
        </span>
      </h6>
      <div className="creature-image">{props.card.creatureImage}</div>
      {big ?
        <button className="utility-button" onClick={() => {
          console.log("hide", props.card.creatureName);
          setBig(false);;
        }}>
          hide menu
        </button>
        :
        <button className="utility-button" onClick={() => {
          console.log(`open`, props.card.creatureName, ":", props.card);
          setBig(true);
        }}
        >
          open menu
        </button>

      }
      {
        big &&
        props.card.abilities.map((ability, index) => {
          return (
            <div className="ability-button" id={index}>

              <p className="small-font "  >
                <span>
                  <b>{ability.abilityName}</b>
                </span>:
                <span style={{ fontStyle: "italic" }}>
                  {ability.abilityFeature}
                </span>
              </p>
              <p className="small-font">
                cost: {ability.abilityCost}
              </p>
            </div>
          );
        })
      }
    </div >
  );
}
