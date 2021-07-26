import React from 'react'

export default function CurrentAction(props) {
  return (
    <div>
      <p><strong> {`${props.currentAction.attacker} ${props.currentAction.action} ${props.currentAction.defender} for ${props.currentAction.impact}`}  </strong></p>

      <button onClick={props.clear} >clear</button>
    </div>
  )
}
