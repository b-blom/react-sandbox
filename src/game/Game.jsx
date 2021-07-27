import React, { useState } from 'react';
import ActionMessage from "./gameComponents/ActionMessage";
import ManaCard from './cards/ManaCard';
import CreatureCard from "./cards/CreatureCard";
import "./Game.css";

export default function Game() {

  const [actionMessage, setactionMessage] = useState(null);

  const [manaDeck, setmanaDeck] = useState([
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" },
    { cardType: "resource", manaType: "fire" }
  ]);

  const [creatureDeck, setcreatureDeck] = useState([{
    creatureName: "drone",
    attack: 1,
    health: 1,
    abilities: [{
      abilityName: "fly",
      abilityFeature: "Creature gains 'flying' until end of turn"
    }, {
      abilityName: "kamikaze",
      abilityFeature: "Sacrafice creature, deals damage equal to attack + health, draw a card."
    }]
  }]);

  console.log("actionMessage", actionMessage);
  return (
    <div className="game-wrapper">
      <p>Proxy the gathering</p>
      <div className="playfield-wrapper">
        <div className="mana-wrapper">
          {manaDeck.map((card, index) => {
            return (
              <ManaCard id={index} card={card} />
            );
          })}
        </div>
        <div className="board-element action-board">
          {actionMessage != null &&
            <ActionMessage message={actionMessage}
              clear={() => { setactionMessage(null); }} />
          }
          {creatureDeck && creatureDeck.map((card, index) => {
            return (<CreatureCard card={card} id={index} />);
          })}
        </div>
      </div >
    </div>
  );
}
