import React from 'react'

export default function PlayerMenu(props) {
  const elementExplanation = false

  console.log("playermenu props", props)
  return (
    <div className="action-menu">
      <p><strong>Name:{props.player.playerName} </strong></p>
      <p>HP: <span>{props.player.hp}</span></p>
      <p>MP: <span>{props.player.mp}</span></p>
      <p>strenth: <span>{props.player.strength}</span> </p>
      <p>magic: <span>{props.player.magicPower}</span> </p>
      <p>defense: <span>{props.player.defense}</span> </p>
      <p>boost element: <span>{props.player.boostElement}</span> </p>

      {/* TODO: create more types of boost and further refine explanation
                Break elementExplanation into separate component. // ExplanationComponent(elementToBeExplained){return elementExplanation} */}
      {elementExplanation ?? <p>an element or artefact that can boost strength, defence, magic abilities and many more. </p> //
      }
      <button className="action-button" onClick={() => {
        props.performAction({
          attacker: props.player.playerName,
          target: props.player.target,
          action: "attack",
          impact: props.player.strength
        })
      }}>Attack</button>
      {/* <button className="action-button" onClick={() => {
        props.performAction({
          attacker: props.player.playerName,
          defender: props.player.target,
          action: "uses magic attack on",
          impact: props.player.strenght + props.player.magicPower
        })
      }}>Magic</button>
      <button className="action-button" onClick={() => {
        props.performAction({
          attacker: props.player.playerName,
          defender: props.player.target,
          action: "uses 'full shield' on",
          impact: "full shield"
        })
      }}>Defend</button>
      <button className="action-button" onClick={() => {
        props.performAction({
          attacker: props.player.playerName,
          defender: props.player.playerName,
          action: " uses health item on ",
          impact: "full hp"
        })
      }}>Use Item</button>
 */}
    </div>
  )
}
