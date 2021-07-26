import React, { useState } from 'react';
import PlayerMenu from './gameComponents/PlayerMenu';
import ActionMessage from "./gameComponents/ActionMessage";
import "./Game.css";

export default function Game() {

  const [playerArray, setplayerArray] = useState([{
    playerId: 0,
    playerName: 'Player One',
    hp: 10,
    mp: 10,
    strength: 5,
    magicPower: 1,
    defense: 5,
    ability: `none`,
    boostElement: `none`,
    shield: false,
    target: 1,
    maxHp: 10
  },
  {
    playerId: 1,
    playerName: 'Player Two',
    hp: 11,
    mp: 11,
    strength: 6,
    magicPower: 1,
    defense: 6,
    ability: `none`,
    boostElement: `Fire`,
    target: 0,
    maxHp: 10

  }]);

  const [actionMessage, setactionMessage] = useState(null);
  const performAction = (action) => {

    // If player uses a status ability (like shield, reflect, berserk etc)
    // this shitch mode will set this status before battle action takes place
    console.log("action", action);
    if (playerArray[action.target].ability === "shield") {
      setactionMessage(`${action.target} is shielded, Mo damage given :()`);
      return;
    }

    // TODO: implement code to revert ability 

    var spreadTarget = { ...playerArray[action.target] };
    spreadTarget.hp = playerArray[action.target].hp - action.impact;

    var newArray = [...playerArray];
    newArray[action.target] = spreadTarget;
    setplayerArray(newArray);
    setactionMessage(` ${action.attacker} ${action.action} ${action.target} for ${action.impact}`);

  };

  const performAbility = (action) => {
    if (action.ability === null) {
      console.warn("action.abiliy is null and should never be null in this scenario");
      return;
    }

    var spreadTarget = { ...playerArray[action.target] };

    if (action.ability === "shield") {
      spreadTarget.ability = action.ability;
    }
    if (action.ability === "heal") {
      spreadTarget.hp = spreadTarget.maxHp;
    }
    var newArray = [...playerArray];
    newArray[action.target] = spreadTarget;
    setplayerArray(newArray);
    setactionMessage(`${action.attacker} ${action.action} ${action.attacker}`);

  };


  console.log("actionMessage", actionMessage);
  return (
    <div className="game-wrapper">
      <p>Game</p>
      <div className="play-field-wrapper">
        <div className="board-element action-board">
          {actionMessage != null &&
            <ActionMessage message={actionMessage}
              clear={() => { setactionMessage(null); }} />
          }

        </div>
        <div className="play-field">

          {playerArray[0] &&
            <div className="board-element">
              <PlayerMenu
                player={playerArray[0]}
                performAction={(action) => {
                  performAction(action);
                }}
                performAbility={(action) => {
                  performAbility(action);
                }}
              />
            </div>
          }
          {playerArray[1] &&
            <div className="board-element">
              <PlayerMenu
                player={playerArray[1]}
                performAction={(action) => {
                  performAction(action);
                }}
                performAbility={(action) => {
                  performAbility(action);
                }}
              />
            </div>
          }
        </div>
      </div >
    </div>
  );
}
