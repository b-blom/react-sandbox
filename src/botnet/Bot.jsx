import React, { useState, useEffect } from 'react';

export default function Bot() {
  const [commandControl, setcommandControl] = useState([
    'primary ccUrl',
    'contingencyUrl',
    'contingencyUrlII',
  ]);

  const [textInput, settextInput] = useState('initialState');
  const [payload, setpayload] = useState({ payload: {} });
  const headless = false; // variable that decide if Bot should render to front end. Headless means no GUI.

  useEffect(() => {
    props.botToNetMessage(textInput);
  });
  // put harvest functions here

  // put send functions here

  // what else do we need?

  if (headless) {
    return null;
  }
  return (
    <div>
      <h3>Bot</h3>
      <p>
        <strong>{textInput}</strong>
      </p>
      <input
        type='text'
        value={textInput}
        onChange={(event) => settextInput(event.target.value)}
      />
    </div>
  );
}
