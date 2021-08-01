import React, { useState } from 'react';
import ManaCard from '../cards/ManaCard';
import InstantCard from '../cards/InstantCard';
import SorceryCard from '../cards/SorceryCard';
import CreatureCard from '../cards/CreatureCard';

export default function Player(props) {

  if (props.playerHp <= 0) {
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
        <p>{props.playerHp}</p>

        <div className="health-adjust-wrapper ">
          <button onClick={() => { props.setPlayerHp(props.playerHp - 1); }} >-</button>
          <button onClick={() => { props.setPlayerHp(props.playerHp + 1); }}>+</button>
        </div>
      </div>
      <div className="mana-wrapper">
        {props.manaDeck && props.manaDeck.map((card, index) => {
          return (
            <ManaCard id={index} card={card} />
          );
        })}
      </div>
      <div className="creature-wrapper">
        {
          props.creatureDeck && props.creatureDeck.map((card, index) => {
            return (
              <CreatureCard
                master={props.playerName}
                card={card}
                id={index}
                summonCreature={(card, cardId) => {
                  props.summonCreature(card, cardId);
                }} />);
          })
        }
      </div>
      <div className="support-cards-wrapper column">
        <div className="support-card-type-wrapper">
          {props.instantsDeck && props.instantsDeck.map((card, index) => {
            return (<InstantCard
              id={index}
              card={card}
              dealDamage={(damage, manaCost, cardId) => {
                console.log("player.jsx dealDamage");

                props.attackOpponent(damage, manaCost, cardId);
              }}
            />);
          })}
        </div>
        <div className="support-card-type-wrapper">
          {props.sorceryDeck && props.sorceryDeck.map((card, index) => {
            return (<SorceryCard
              card={card}
              id={index} />);
          })}
        </div>
      </div>
    </div>
  );
}
