import React, { useContext, useState } from 'react';
import ManaCard from '../cards/ManaCard';
import InstantCard from '../cards/InstantCard';
import SorceryCard from '../cards/SorceryCard';
import CreatureCard from '../cards/CreatureCard';
import { SelectedSorceryCardContext } from '../../context/SorceryContext';

export default function Player(props) {

  const { msg, setMsg } = useContext(SelectedSorceryCardContext);

  const [selectedSorceryCard, setSelectedSorceryCard] = useState(SelectedSorceryCardContext);

  if (props.playerHp <= 0) {
    return (
      <div className="player">
        <p>{props.playerName} is dead</p>
      </div>
    );
  }

  return (
    <div className="player">
      <h3>{msg}</h3>
      <button onClick={() => { setMsg("a new message"); }}>change context</button>
      <div className="row">
        <p>{props.playerName}</p>
        <p>{props.playerHp}</p>
        <div className="health-adjust-wrapper ">
          <button onClick={() => { props.setPlayerHp(props.playerHp - 1); }}>
            -
          </button>
          <button onClick={() => { props.setPlayerHp(props.playerHp + 1); }}>
            +
          </button>
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
                  props.summonCreature(props.playerName, card, cardId);
                }}
                creatureAttack={(card) => {
                  props.creatureAttack(card);
                }}
              />);
          })
        }
      </div>
      <div className="support-cards-wrapper column">
        <div className="support-card-type-wrapper">
          {props.instantsDeck && props.instantsDeck.map((card, index) => {
            return (<InstantCard
              id={index}
              card={card}
              dealDamage={(manaCost, damage, cardId) => {
                console.log("player.jsx dealDamage");

                props.attackWithInstant(props.playerName, manaCost, damage, cardId);
              }}
            />);
          })}
        </div>
        <div className="support-card-type-wrapper">
          {props.sorceryDeck && props.sorceryDeck.map((card, index) => {
            return (<SorceryCard
              card={card}
              id={index}
            />);
          })}
        </div>
      </div>
    </div>
  );
}
