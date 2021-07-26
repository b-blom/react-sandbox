import React, { useState } from 'react';
import PlayerMenu from './gameComponents/PlayerMenu';
import CurrentAction from './gameComponents/CurrentAction';
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
    boostElement: `none`,
    target: 1
  },
  {
    playerId: 1,
    playerName: 'Player Two',
    hp: 11,
    mp: 11,
    strength: 6,
    magicPower: 1,
    defense: 6,
    boostElement: `Fire`,
    target: 0

  }]);

  const [currentAction, setcurrentAction] = useState(null);

  const performAction = (action) => {
    var spreadTarget = { ...playerArray[action.target] };
    spreadTarget.hp = playerArray[action.target].hp - action.impact;

    var newArray = [...playerArray];
    newArray[action.target] = spreadTarget;
    setplayerArray(newArray);
    setcurrentAction(action);
  };

  return (
    <div className="game-wrapper">
      <p>Game</p>
      <div className="play-field">
        {playerArray[0] &&
          <div className="board-element">
            <PlayerMenu
              player={playerArray[0]}
              performAction={(action) => {
                performAction(action);
              }}
            />
          </div>
        }
        {currentAction != null &&
          <div className="board-element">
            <CurrentAction
              currentAction={currentAction}
              clear={() => setcurrentAction(null)}
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
            />
          </div>
        }
      </div>
    </div >
  );
}
