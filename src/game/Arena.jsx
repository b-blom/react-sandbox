import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';
import ActionMessage from '../game/gameComponents/ActionMessage';
import PlayerHud from './gameComponents/PlayerHud';
import Player1Hand from './cards/renderComponents/Player1Hand';
import Player2Hand from './cards/renderComponents/Player2Hand';
import ManaCard from './cards/ManaCard';
import CreatureCard from './cards/CreatureCardV2';

export default function Arena() {
  const {
    activePlayer,
    setActivePlayer,
    actionMessage,
    setActionMessage,

    player1Hp,
    player1Name,
    setPlayer1Hp,
    player1Deck,
    player1Hand,
    setPlayer1Deck,
    setPlayer1Hand,
    player1BattlefieldMana,
    player1BattlefieldInstant,
    setPlayer1BattlefieldInstant,
    setPlayer1BattlefieldMana,
    player1BattlefieldCreatures,
    setPlayer1BattlefieldCreatures,

    player2Hp,
    player2Name,
    setPlayer2Hp,
    player2Deck,
    player2Hand,
    setPlayer2Deck,
    player2BattlefieldMana,
    player2BattlefieldInstant,
    setPlayer2BattlefieldInstant,
    setPlayer2BattlefieldMana,
    player2BattlefieldCreatures,
    setPlayer2BattlefieldCreatures,
  } = useContext(DeckContext);

  const [hidePlayer1, setHidePlayer1] = useState(false);
  const [hidePlayer2, setHidePlayer2] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState(() =>
    Math.floor(Math.random() * 16777215).toString(16)
  );

  const [attackStack, setAttackStack] = useState([]);

  const clickOnCardInHand = (card, index) => {
    console.log(card);
    if (card.type === 'mana') {
      console.log('mana');
      let newBattleFieldMana = [...player1BattlefieldMana];
      newBattleFieldMana.push(card);
      setPlayer1BattlefieldMana(newBattleFieldMana);

      let newPlayerHand = [...player1Hand];
      newPlayerHand.splice(index, 1);
      setPlayer1Hand(newPlayerHand);
    }

    if (card.type === 'creature') {
      let newBattlefieldCreatures = [...player1BattlefieldCreatures];
      newBattlefieldCreatures.push(card);
      setPlayer1BattlefieldCreatures(newBattlefieldCreatures);

      let newPlayerHand = [...player1Hand];
      newPlayerHand.splice(index, 1);
      setPlayer1Hand(newPlayerHand);
    }

    if (card.type === 'instant') {
      const battlefieldMana = [...player1BattlefieldMana];

      let manaIndexToTap = [];

      // find all untapped mana
      battlefieldMana.forEach((card, index) => {
        if (!card.tapped) manaIndexToTap.push(index);
      });

      // check if we have enough mana
      if (manaIndexToTap.length < card.cost) {
        alert('not enough mana');
        return;
      }

      // tap the required mana cards

      for (var i = 0; i < card.cost; i++) {
        const manaCardToTap = manaIndexToTap[i];
        battlefieldMana[manaCardToTap].tapped = true;
      }

      // deal damage
      if (card.damage > 0) {
        const player = 'player1';
        if (player === 'player1') {
          let newHp = player2Hp;
          newHp = newHp - card.damage;
          setPlayer2Hp(newHp);
        }

        // if instant is hp + add hp to player

        // if instant is defense add defense to creature

        // if instant is strength add strength to creature

        // tap mana card

        // remove card from player hand
        let newPlayerHand = [...player1Hand];
        newPlayerHand.splice(index, 1);
        setPlayer1Hand(newPlayerHand);
      } else {
        alert('not enough mana');
      }
    }
  };

  const addToAttackStack = (castingPlayer, card, cardId) => {
    let newAttackStack = [...attackStack];
    newAttackStack.push({ castingPlayer, card, cardId });
    setAttackStack(newAttackStack);
    console.log(attackStack);
  };
  const dealDamage = (player, damage, card) => {
    // refactor to use card.damage instead of damage.
    console.log('p2hp', player2Hp);
    console.log(card);
    if (player === 'player1') {
      let newHp = player2Hp;
      newHp = newHp - damage;
      setPlayer2Hp(newHp);
      setActionMessage(
        `${card.name} dealt ${card.strength} damage to player 2`
      );
    }
    if (player === 'player2') {
      let newHp = player1Hp;
      newHp = newHp - damage;
      setPlayer1Hp(newHp);
      setActionMessage(
        `${card.name} dealt ${card.strength} damage to player 1`
      );
    }
  };

  return (
    <div
      className='arena game-wrapper  image-background'
      style={{ background: `#${backgroundColor}` }}>
      <button
        style={{ height: '30px' }}
        onClick={() => {
          setBackgroundColor(Math.floor(Math.random() * 16777215).toString(16));
        }}>
        new background color
      </button>
      <h2>arena</h2>
      <button
        className='arena-button'
        style={{ width: '100px', margin: '0 auto' }}
        onClick={() => {
          if (activePlayer === 'player1') {
            setActivePlayer('player2');
          } else {
            setActivePlayer('player1');
          }
          setHidePlayer1(false);
          setHidePlayer2(false);
        }}>
        Toggle active player
      </button>
      {/* TODO: Add an action log  */}
      <div className='col flex-grow full-height'>
        <div className='row flex-between '>
          <div id='player-1-hand-wrapper'>
            {activePlayer === 'player1' && (
              <button
                className='arena-button'
                style={{ width: '75%', height: '40px' }}
                onClick={() => {
                  setHidePlayer1(!hidePlayer1);
                }}>
                {hidePlayer1 ? 'show hand' : 'hide hand'}{' '}
              </button>
            )}
            <div
              className='col'
              style={
                activePlayer === 'player1' && !hidePlayer1
                  ? null
                  : {
                      opacity: '0%',
                    }
              }>
              {' '}
              <PlayerHud
                playerName={player1Name}
                playerDeck={player1Deck}
                playerHand={player1Hand}
                clickOnHandCard={(card, index) =>
                  clickOnCardInHand(card, index)
                }
                player='player1'
                opponent='player2'
              />
              {/*   <Player1Hand
                playerName={player1Name}
                player='player1'
                opponent='player2'
              /> */}
            </div>
          </div>
          <div className=' col flex-stretch flex-grow battlefield-background'>
            <div
              id='battlefield-main-window'
              className=' battlefield-content '
              style={{ minHeight: '600px' }}>
              <div id='battlefield-header' className='row battlefield-header'>
                <h4>
                  p1 hp: <span style={{ fontSize: '20px' }}>{player1Hp}</span>
                </h4>
                <div className='col'>
                  <h2>battlefield</h2> <ActionMessage />
                </div>
                {/* TODO: add or replace with actionMessage */}
                <h4>
                  <span style={{ fontSize: '20px' }}>{player2Hp}</span> :p2 hp
                </h4>
              </div>
              {attackStack.length > 0 && (
                <div className='col'>
                  <h3>Attack stack</h3>
                  {attackStack.map((attack) => {
                    return (
                      <p>
                        {attack.card.name}, {attack.card.strength}
                      </p>
                    );
                  })}

                  <button
                    onClick={() => {
                      attackStack.map((attack) => {
                        dealDamage(
                          attack.castingPlayer,
                          attack.card.strength,
                          attack.card
                        );
                      });
                      setAttackStack([]);
                    }}>
                    launch attack
                  </button>
                </div>
              )}
              {player1Hp <= 0 && <h1>PLAYER 2 wins</h1>}
              {player2Hp <= 0 && <h1>PLAYER 1 wins</h1>}
              {player1Hp > 0 && player2Hp > 0 && (
                <div className='row'>
                  <div className='battlefield-player-wrapper'>
                    <h3>player 1 side</h3>
                    <div className='col'>
                      {/* Refactor height constraint to something better */}
                      <div className='row'>
                        <div className='col'>
                          {player1BattlefieldMana.map((card, index) => {
                            if (card.type === 'mana') {
                              return (
                                <ManaCard
                                  card={card}
                                  key={index}
                                  summoned={true}
                                />
                              );
                            }
                            return 'no card type to render';
                          })}
                        </div>
                        <div className='row flex-wrap'>
                          {player1BattlefieldCreatures.map((card, index) => {
                            return (
                              <CreatureCard
                                card={card}
                                key={index}
                                summoned={true}
                                tapped={false}
                                attack={() => {
                                  addToAttackStack('player1', card, index);
                                  //dealDamage('player1', card.strength);
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='battlefield-player-wrapper'>
                    <h3>player 2 side</h3>
                    <div className='col'>
                      {/* //TODO: Refactor height constraint to something better */}
                      <div className='row-reverse'>
                        <div className='col'>
                          {player2BattlefieldMana.map((card, index) => {
                            if (card.type === 'mana') {
                              return (
                                <ManaCard
                                  card={card}
                                  key={index}
                                  summoned={true}
                                />
                              );
                            }
                            return 'no card type to render';
                          })}
                        </div>
                        <div className='row flex-wrap'>
                          {player2BattlefieldCreatures.map((card, index) => {
                            return (
                              <CreatureCard
                                card={card}
                                key={index}
                                summoned={true}
                                attack={() => {
                                  dealDamage('player2', card.strength);
                                  setActionMessage(
                                    `dealt ${card.strength} damage to player 1`
                                  );
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div id='player-2-hand-wrapper'>
            {activePlayer === 'player2' && (
              <button
                className='arena-button'
                style={{ width: '75%', height: '40px' }}
                onClick={() => {
                  setHidePlayer2(!hidePlayer2);
                }}>
                {hidePlayer2 ? 'show hand' : 'hide hand'}
              </button>
            )}
            <div
              className='col'
              style={
                activePlayer === 'player2' && !hidePlayer2
                  ? null
                  : { opacity: '0%' }
              }>
              <PlayerHud
                playerName={player2Name || 'dos'}
                playerDeck={player2Deck}
                playerHand={player2Hand}
                clickOnHandCard={(card, index) =>
                  clickOnCardInHand(card, index)
                }
                player='player2'
                opponent='player1'
              />
              {/* <Player2Hand
                playerName={player2Name}
                player='player1'
                opponent='player2'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
