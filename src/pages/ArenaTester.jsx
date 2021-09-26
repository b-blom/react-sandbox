import React, { useContext, useState } from 'react';
import { DeckContext } from '../context/DeckContext';

import PlayerHud from '../game/gameComponents/PlayerHud';

export default function ArenaTester() {
  const {
    activePlayer,
    setActivePlayer,
    actionMessage,
    setActionMessage,

    player1Hp,
    player1Name,
    setPlayer1Hp,
    player1Deck,
    setPlayer1Deck,
    player1Hand,

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
    setPlayer2Deck,
    player2BattlefieldMana,
    player2BattlefieldInstant,
    setPlayer2BattlefieldInstant,
    setPlayer2BattlefieldMana,
    player2BattlefieldCreatures,
    setPlayer2BattlefieldCreatures,
  } = useContext(DeckContext);

  return (
    <div>
      {' '}
      <PlayerHud
        playerName={player1Name}
        playerDeck={player1Deck}
        playerHand={player1Hand}
        player='player1'
        opponent='player2'
      />
    </div>
  );
}
