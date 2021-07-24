import React, { useState } from 'react';

import Bot from './Bot';
import CommandAndControl from './CommandAndControl';

export default function Net() {
  const [messageReceivedFromBot, setmessageReceivedFromBot] =
    useState('initialState');
  return (
    <div>
      <div
        className='flex-row'
        style={{ display: 'flex', flexDirection: 'column' }}>
        <p>ye</p>
        <p>boi</p>
        <p>
          message from bot: <strong>{messageReceivedFromBot}</strong>{' '}
        </p>
      </div>
      <div
        className='flex-row'
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: '5px solid blue',
          margin: '50px',
        }}></div>
      <div
        className='flex-row'
        style={{ display: 'flex', flexDirection: 'row' }}>
        <CommandAndControl />
        <div
          className='divider'
          style={{ border: '5px solid red', margin: '50px' }}></div>
        <Bot
          botToNetMessage={(message) => {
            setmessageReceivedFromBot(message);
          }}
        />
      </div>
    </div>
  );
}
