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
    { cardType: "resource", manaImage: "🔥", manaType: "fire" },
    { cardType: "resource", manaImage: "🔥", manaType: "fire" },
    { cardType: "resource", manaImage: "🔥", manaType: "fire" },
    { cardType: "resource", manaImage: "🔥", manaType: "fire" },
  ]);

  const [instantsDeck, setinstantsDeck] = useState([
    {
      instantName: "bolt1",
      instantDescription: "Deal 3 damage to target creature or target player",
      instantDamage: 3,
      instantImage: "⚡",
      instantCost: 1
    },
    {
      instantName: "bolt2",
      instantDescription: "Deal 3 damage to target creature or target player",
      instantDamage: 3,
      instantImage: "⚡",
      instantCost: 1
    },
    {
      instantName: "bolt3",
      instantDescription: "Deal 3 damage to target creature or target player",
      instantDamage: 3,
      instantImage: "⚡",
      instantCost: 1
    },
  ]);

  const [sorceryDeck, setsorceryDeck] = useState([{
    sorceryName: "bless",
    sorceryDescription: "Raise strength with 100%",
    sorceryImage: "🍾",
    sorcreyCost: "1 any"
  }]);

  const [creatureDeck, setCreatureDeck] = useState([{
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
  const [player1SummonedCreatures, setPlayer1SummonedCreatures] = useState([]);
  const [player2SummonedCreatures, setPlayer2SummonedCreatures] = useState([]);
  const [player1Hp, setPlayer1Hp] = useState(20);
  const [player2Hp, setPlayer2Hp] = useState(20);

  console.log("actionMessage", actionMessage);
  return (
    <div className="game-wrapper">
      <p>Proxy the gathering</p>
      <div className="player-wrapper">

        <Player
          playerName="player1"
          playerHp={player1Hp}
          setPlayerHp={(hp) => { setPlayer1Hp(hp); }}
          attackOpponent={(damage) => { setPlayer2Hp(player2Hp - damage); }}
          manaDeck={manaDeck}
          instantsDeck={instantsDeck}
          sorceryDeck={sorceryDeck}
          creatureDeck={creatureDeck}
          summonCreature={(card, id) => {
            var newCreatureDeck = [...creatureDeck];
            newCreatureDeck.slice(id, 1);
            setCreatureDeck(newCreatureDeck);
            var newPlayer1SummonedCreatures = [...player1SummonedCreatures];
            newPlayer1SummonedCreatures.push(card);
            setPlayer1SummonedCreatures(newPlayer1SummonedCreatures);
          }}
        />

        <div className="playfield">
          <h2>Playfield</h2>
          {actionMessage != null &&
            <ActionMessage message={actionMessage}
              clear={() => { setactionMessage(null); }}
            />
          }
          <div className="row">
            <div className="player-playfield">
              <p>player 1</p>
              {
                player1SummonedCreatures && player1SummonedCreatures.map((card, index) => {
                  return <CreatureCard
                    card={card}
                    id={index}
                    summoned={true}
                    creatureAttack={(card) => {
                      setPlayer2Hp(player2Hp - card.strength);
                    }}
                  />;
                })
              }
            </div>
            <div className="player-playfield">
              <p>player 2</p>
              {
                player2SummonedCreatures && player2SummonedCreatures.map((card, index) => {
                  return <CreatureCard
                    card={card}
                    id={index}
                    summoned={true}
                    creatureAttack={(card) => {
                      setPlayer1Hp(player1Hp - card.strength);
                    }}
                  />;
                })
              }
            </div>
          </div>
        </div>

        <Player
          playerName="player2"
          manaDeck={manaDeck}
          instantsDeck={instantsDeck}
          sorceryDeck={sorceryDeck}
          creatureDeck={creatureDeck}
          playerHp={player2Hp}
          setPlayerHp={(hp) => setPlayer2Hp(hp)}
          attackOpponent={(damage, manaCost, cardId) => {
            if (manaDeck.length > 0) {
              var newManaDeck = [...manaDeck];
              for (var i = 0; i < manaCost; i++) {
                newManaDeck.pop();
              }
              setmanaDeck(newManaDeck);
              var newInstantsDeck = [...instantsDeck];
              newInstantsDeck.splice(cardId, 1);
              setinstantsDeck(newInstantsDeck);
              setPlayer1Hp(player1Hp - damage);
            }
          }}
          summonCreature={(card, cardId) => {
            var newCreatureDeck = [...creatureDeck];
            newCreatureDeck.splice(cardId, 1);
            setCreatureDeck(newCreatureDeck);

            var newPlayer2SummonedCreatures = [...player2SummonedCreatures];
            newPlayer2SummonedCreatures.push(card);
            setPlayer2SummonedCreatures(newPlayer2SummonedCreatures);
          }}
        />
      </div>
    </div >
  );
}
