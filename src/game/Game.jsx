import React, { useState } from 'react';
import Player from './gameComponents/Player';
import ActionMessage from "./gameComponents/ActionMessage";
import CreatureCard from "./cards/CreatureCard";

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

  const [player1Hp, setPlayer1Hp] = useState(20);
  const [player1CreatureDeck, setPlayer1CreatureDeck] = useState(creatureDeck);
  const [player1ManaDeck, setPlayer1ManaDeck] = useState(manaDeck);
  const [player1InstantDeck, setPlayer1InstantDeck] = useState(instantsDeck);
  const [player1SorceryDeck, setPlayer1SorceryDeck] = useState(sorceryDeck);
  const [player1SummonedCreatures, setPlayer1SummonedCreatures] = useState([]);

  const [player2Hp, setPlayer2Hp] = useState(20);
  const [player2CreatureDeck, setPlayer2CreatureDeck] = useState(creatureDeck);
  const [player2ManaDeck, setPlayer2ManaDeck] = useState(manaDeck);
  const [player2InstantDeck, setPlayer2InstantDeck] = useState(instantsDeck);
  const [player2SorceryDeck, setPlayer2SorceryDeck] = useState(sorceryDeck);
  const [player2SummonedCreatures, setPlayer2SummonedCreatures] = useState([]);

  // helper functions
  const spendMana = (player, manaCost) => {
    var newManaDeck = [];
    if (player === "player1") {
      newManaDeck = [...player1ManaDeck];
    }
    if (player === "player2") {
      newManaDeck = [...player2ManaDeck];
    }
    if (newManaDeck.Length < manaCost) {
      setactionMessage(`${player} has not enough mana`);
      return false;
    };

    for (var i = 0; i < manaCost; i++) {
      newManaDeck.pop();
    }
    if (player === "player1") {
      setPlayer1ManaDeck(newManaDeck);
    }
    if (player === "player2") {
      setPlayer2ManaDeck(newManaDeck);
    }
    return true;
  };

  const dealDamage = (player, damage) => {
    if (player === "player1") { setPlayer2Hp(player2Hp - damage); }
    if (player === "player2") { setPlayer1Hp(player1Hp - damage); }
  };

  const removeUsedInstantCard = (player, cardId) => {
    var newInstantsDeck = [];
    if (player === "player1") {
      newInstantsDeck = [...player1InstantDeck];
    }
    if (player === "player2") {
      newInstantsDeck = [...player2InstantDeck];
    }

    newInstantsDeck.splice(cardId, 1);

    if (player === "player1") {
      setPlayer1InstantDeck(newInstantsDeck);
    }
    if (player === "player2") {
      setPlayer2InstantDeck(newInstantsDeck);
    }
  };

  const summonCreature = (player, card, cardId) => {
    console.log("summonCreature", player, cardId);
    var newCreatureDeck = [];
    var newSummonedCreatureDeck = [];
    if (player === "player1") {
      newCreatureDeck = [...player1CreatureDeck];
      newSummonedCreatureDeck = [...player1SummonedCreatures];
    }
    if (player === "player2") {
      newCreatureDeck = [...player2CreatureDeck];
      newSummonedCreatureDeck = [...player2SummonedCreatures];
    }

    newCreatureDeck.splice(cardId, 1);
    newSummonedCreatureDeck.push(card);

    if (player === "player1") {
      setPlayer1CreatureDeck(newCreatureDeck);
      setPlayer1SummonedCreatures(newSummonedCreatureDeck);
    }
    if (player === "player2") {
      setPlayer2CreatureDeck(newCreatureDeck);
      setPlayer2SummonedCreatures(newSummonedCreatureDeck);
    }
  };

  // /helper functions

  function useInstantCard(player, manaCost, damage, cardId) {
    if (!spendMana(player, manaCost)) { return; };
    dealDamage(player, damage);
    removeUsedInstantCard(player, cardId);
  };


  console.log("actionMessage", actionMessage);
  return (
    <div className="game-wrapper">
      <p>Proxy the gathering</p>
      <div className="player-wrapper">

        <Player
          playerName="player1"
          playerHp={player1Hp}
          manaDeck={player1ManaDeck}
          instantsDeck={player1InstantDeck}
          sorceryDeck={player1SorceryDeck}
          creatureDeck={player1CreatureDeck}
          setPlayerHp={(hp) => { setPlayer1Hp(hp); }}

          attackWithInstant={(player, manaCost, damage, cardId) => {
            if (!spendMana(player, manaCost)) { return; };
            dealDamage(player, damage);
            removeUsedInstantCard(player, cardId);
          }}
          summonCreature={(player, cardId) => {
            summonCreature(player, cardId);
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
          playerHp={player2Hp}
          manaDeck={player2ManaDeck}
          instantsDeck={player2InstantDeck}
          sorceryDeck={player2SorceryDeck}
          creatureDeck={player2CreatureDeck}
          setPlayerHp={(hp) => setPlayer2Hp(hp)}
          attackWithInstant={(damage, manaCost, cardId) => {
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
