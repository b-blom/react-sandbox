import React, { useContext } from 'react';
import { DeckContext } from '../../context/DeckContext';

export default function Player1Hand(props) {
  const {
    player1Hp,
    setPlayer1Hp,
    player1Deck,
    setPlayer1Deck,
    player1Hand,
    setPlayer1Hand,
    player1BattlefieldMana,
    setPlayer1BattlefieldMana,
    player1BattlefieldCreatures,
    setPlayer1BattlefieldCreatures,

    player2Hp,
    setPlayer2Hp,
  } = useContext(DeckContext);

  async function drawCard() {
    if (player1Deck.length <= 0) {
      alert('player1Deck is empty');
      return;
    }
    if (player1Hand.length >= 10) {
      alert('player1Hand is full');
      return;
    }
    const randomNumber = Math.floor(Math.random() * player1Deck.length);

    let newHand = [...player1Hand];
    newHand.push(player1Deck[randomNumber]);
    setPlayer1Hand(newHand);

    let newDeck = [...player1Deck];
    newDeck.splice(randomNumber, 1);
    setPlayer1Deck(newDeck);
  }
  return (
    <div className='player-hand'>
      <h2 className='margin-t-b-2'>
        {props.playerName || 'p1 name placeholder'}
      </h2>
      <h3 className='margin-t-b-2'>
        Deck size: {JSON.stringify(player1Deck.length)}
      </h3>
      <hr
        style={{
          width: '90%',
        }}
      />
      <button
        className='arena-button'
        onClick={() => {
          drawCard();
        }}>
        draw card
      </button>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>image</th>
            <th>type</th>
            <th>summon</th>
          </tr>
        </thead>
        <tbody>
          {props.playerHand.map((card, index) => {
            return (
              <tr key={index}>
                <td style={{ textAlign: 'end' }}>{card.name}</td>
                <td>{card.image}</td>
                <td>{card.type}</td>
                <td>
                  <button
                    onClick={() => {
                      props.clickOnHandCard(card, index);
                    }}>
                    {card.type === 'instant' ? `cast: ${card.cost}` : 'summon'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
