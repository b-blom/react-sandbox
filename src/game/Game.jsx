import React, { useState } from 'react'
import PlayerMenu from './gameComponents/PlayerMenu'
import CurrentAction from './gameComponents/CurrentAction'
import "./Game.css"

export default function Game() {

  const [player1, setplayer1] = useState(
    {
      playerName: 'Player One',
      hp: 10,
      mp: 10,
      strength: 5,
      magicPower: 1,
      defense: 5,
      boostElement: `none`,
      target: "Player Two"
    }
  )
  const [player2, setplayer2] = useState(
    {
      playerName: 'Player Two',
      hp: 11,
      mp: 11,
      strength: 6,
      magicPower: 1,
      defense: 6,
      boostElement: `Fire`,
      target: "Player One"

    }
  )

  const [currentAction, setcurrentAction] = useState(null)

  function attack(action) {
  }

  function performAction(action) {
    console.log("action", action)
    setplayer2((player2) => ({ ...player2, hp: player2.hp - action.impact }))
    setcurrentAction(action);
  }

  return (
    <div className="game-wrapper">
      <p>Game</p>
      <div className="play-field">
        {player1 &&
          <div className="board-element">
            <PlayerMenu
              player={player1}
              performAction={(action) => {
                performAction(action)
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
        {player2 &&
          <div className="board-element">
            <PlayerMenu
              player={player2}
              performAction={(action) => {
                performAction(action)
              }}
            />
          </div>
        }
      </div>
    </div >
  )
}
