import React, { useState } from 'react';
import ManaCard from '../cards/ManaCard';
import InstantCard from '../cards/InstantCard';
import SorceryCard from '../cards/SorceryCard';
import CreatureCard from '../cards/CreatureCard';

export default function Player(props) {
  const [playerHp, setplayerHp] = useState(20);
  const [activeCard, setActiveCard] = useState(null);


  if (playerHp <= 0) {
    return (
      <div className="player">
        <p>{props.playerName} is dead</p>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="row">
        <p>{props.playerName}</p>
        <p>{playerHp}</p>

        <div className="health-adjust-wrapper ">
          <button onClick={() => { setplayerHp(playerHp - 1); }} >-</button>
          <button onClick={() => { setplayerHp(playerHp + 1); }}>+</button>
        </div>
      </div>
      <div className="mana-wrapper">
        {props.manaDeck && props.manaDeck.map((card, index) => {
          return (
            <ManaCard id={index} card={card} />
          );
        })}
      </div>
      <div className="support-cards-wrapper">
        <div className="instants-wrapper">
          {props.instantsDeck && props.instantsDeck.map((card, index) => {
            return (<InstantCard card={card} id={index} />);
          })}
        </div>
        <div className="sorcery-wrapper">
          {props.sorceryDeck && props.sorceryDeck.map((card, index) => {
            return (<SorceryCard card={card} id={index} />);
          })}
        </div>
      </div>
      <div className="creature-wrapper">
        {
          props.creatureDeck && props.creatureDeck.map((card, index) => {
            return (
              <CreatureCard
                card={card}
                id={index}
              />);
          })
        }
      </div>
    </div>
  );
}
