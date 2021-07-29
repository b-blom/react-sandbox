import React, { useState } from 'react';
import Player from './gameComponents/Player';
import ActionMessage from "./gameComponents/ActionMessage";
import ManaCard from './cards/ManaCard';
import CreatureCard from "./cards/CreatureCard";
import InstantCard from './cards/InstantCard';
import SorceryCard from './cards/SorceryCard';
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

  ]);

  const [instantsDeck, setinstantsDeck] = useState([
    {
      instantName: "lightning bolt",
      instantDescription: "Deal 3 damage to target creature or target player",
      instantCost: "1 fire"
    }
  ]);

  const [sorceryDeck, setsorceryDeck] = useState([{
    sorceryName: "bless",
    sorceryDescription: "Raise strength with 100%",
    sorceryImage: "image",
    sorcreyCost: "1 any"
  }]);

  const [creatureDeck, setcreatureDeck] = useState([{
    creatureName: "drone",
    creatureImage: "✈",
    strength: 1,
    health: 1,
    abilities: [{
      abilityName: "fly",
      abilityFeature: "Creature gains 'flying' until end of turn",
      abilityCost: "1 any"
    }, {
      abilityName: "kamikaze",
      abilityFeature: "Sacrifice creature, deals damage equal to strength + health, draw a card.",
      abilityCost: "3 any",
    }]
  }, {
    creatureName: "cat",
    creatureImage: "🐈",
    strength: 1,
    health: 1,
    abilities: [{
      abilityName: "charm",
      abilityFeature: "All oponents must choose one phase to skip: pre battle, battle or post battle.",
      abilityCost: "1 any"
    }, {
      abilityName: "nine lives",
      abilityFeature: "Return creature to players hand, draw a card and summon one creature with haste to the battlefield.",
      abilityCost: "3 any",
    }]
  }]);

  console.log("actionMessage", actionMessage);
  return (
    <div className="game-wrapper">
      <p>Proxy the gathering</p>
      <div className="player-wrapper">
        <Player
          playerName="player1"
          manaDeck={manaDeck}
          instantsDeck={instantsDeck}
          sorceryDeck={sorceryDeck}
          creatureDeck={creatureDeck}
        />
        <Player
          playerName="player2"
          manaDeck={manaDeck}
          instantsDeck={instantsDeck}
          sorceryDeck={sorceryDeck}
          creatureDeck={creatureDeck}
        />
      </div>
      <div className="playfield-wrapper">
        {actionMessage != null &&
          <ActionMessage message={actionMessage}
            clear={() => { setactionMessage(null); }} />
        }
      </div>
    </div >

  );
}
