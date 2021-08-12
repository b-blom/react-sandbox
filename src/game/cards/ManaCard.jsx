import React from 'react';
import './Card.css';

export default function ManaCard(props) {
  console.log('manacard props', props);
  return (
    <div className='mana-card playing-card'>
      <h6>{props.card.name || 'mana'}</h6>
      <div className='mana-color'>
        <div className='mana-image'>
          {props.card.manaImage || props.card.image}
        </div>
      </div>
    </div>
  );
}
