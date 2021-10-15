import React, { useState } from 'react';
import './tttstyles.css';

export default function TicTacToe() {
  const [p1, setP1] = useState('player-1');
  const [gameWinner, setGameWinner] = useState(null);

  const clicked = (id) => {
    if (gameWinner !== null) {
      console.log('game over');
      return;
    }
    const tile = document.getElementById(id);

    if (p1 === 'player-1') {
      if (!tile.classList.contains('player-2')) {
        tile.style.backgroundColor = 'green';
        tile.classList.add('player-1');
        setP1('player-2');
      }
    }
    if (p1 === 'player-2') {
      if (!tile.classList.contains('player-1')) {
        tile.style.backgroundColor = 'red';
        tile.classList.add('player-2');
        setP1('player-1');
      }
    }
    const doWeHaveAwinner = checkWinner();
    if (doWeHaveAwinner.includes('player-1')) {
      console.log('P1 WINS');
      setGameWinner('player-1');
    }
    if (doWeHaveAwinner.includes('player-2')) {
      setGameWinner('player-2');
      console.log('P2 WINS');
    }
  };

  const checkWinner = () => {
    let tile11 = document.getElementById('1-1').classList[1];
    let tile12 = document.getElementById('1-2').classList[1];
    let tile13 = document.getElementById('1-3').classList[1];
    let tile21 = document.getElementById('2-1').classList[1];
    let tile22 = document.getElementById('2-2').classList[1];
    let tile23 = document.getElementById('2-3').classList[1];
    let tile31 = document.getElementById('3-1').classList[1];
    let tile32 = document.getElementById('3-2').classList[1];
    let tile33 = document.getElementById('3-3').classList[1];

    /* Player 1 win contitions */
    if (
      tile11 === 'player-1' &&
      tile12 === 'player-1' &&
      tile13 === 'player-1'
    ) {
      console.log('player-1 won ROW 1');
      return 'player-1 won ROW1';
    }
    if (
      tile21 === 'player-1' &&
      tile22 === 'player-1' &&
      tile23 === 'player-1'
    ) {
      console.log('player-1 won ROW 2');
      return 'player-1 won ROW2';
    }
    if (
      tile31 === 'player-1' &&
      tile32 === 'player-1' &&
      tile33 === 'player-1'
    ) {
      console.log('player-1 won ROW 3');
      return 'player-1 won ROW3';
    }
    if (
      tile11 === 'player-1' &&
      tile21 === 'player-1' &&
      tile31 === 'player-1'
    ) {
      console.log('player-1 won COL 1');
      return 'player-1 won COL1';
    }
    if (
      tile12 === 'player-1' &&
      tile22 === 'player-1' &&
      tile32 === 'player-1'
    ) {
      console.log('player-1 won COL 2');
      return 'player-1 won COL2';
    }
    if (
      tile31 === 'player-1' &&
      tile32 === 'player-1' &&
      tile33 === 'player-1'
    ) {
      console.log('player-1 won COL 3');
      return 'player-1 won COL3';
    }
    if (
      tile11 === 'player-1' &&
      tile22 === 'player-1' &&
      tile33 === 'player-1'
    ) {
      console.log('player-1 won Diagonal top left');
      return 'player-1 won DTLeft';
    }
    if (
      tile13 === 'player-1' &&
      tile22 === 'player-1' &&
      tile31 === 'player-1'
    ) {
      console.log('player-1 won Diagonal top right');
      return 'player-1 won DTRight';
    }

    /* Player 2 win contitions */
    if (
      tile11 === 'player-2' &&
      tile12 === 'player-2' &&
      tile13 === 'player-2'
    ) {
      console.log('player-2 won ROW 1');
      return 'player-2 won ROW1';
    }
    if (
      tile21 === 'player-2' &&
      tile22 === 'player-2' &&
      tile23 === 'player-2'
    ) {
      console.log('player-2 won ROW 2');
      return 'player-2 won ROW2';
    }
    if (
      tile31 === 'player-2' &&
      tile32 === 'player-2' &&
      tile33 === 'player-2'
    ) {
      console.log('player-2 won ROW 3');
      return 'player-2 won ROW3';
    }
    if (
      tile11 === 'player-2' &&
      tile21 === 'player-2' &&
      tile31 === 'player-2'
    ) {
      console.log('player-2 won COL 1');
      return 'player-2 won COL1';
    }
    if (
      tile12 === 'player-2' &&
      tile22 === 'player-2' &&
      tile32 === 'player-2'
    ) {
      console.log('player-2 won COL 2');
      return 'player-2 won COL2';
    }
    if (
      tile31 === 'player-2' &&
      tile32 === 'player-2' &&
      tile33 === 'player-2'
    ) {
      console.log('player-2 won COL 3');
      return 'player-2 won COL3';
    }
    if (
      tile11 === 'player-2' &&
      tile22 === 'player-2' &&
      tile33 === 'player-2'
    ) {
      console.log('player-2 won Diagonal top left');
      return 'player-2 won DTLeft';
    }
    if (
      tile13 === 'player-2' &&
      tile22 === 'player-2' &&
      tile31 === 'player-2'
    ) {
      console.log('player-2 won Diagonal top right');
      return 'player-2 won DTRight';
    }
    return 'no winner yet';
  };

  const newGame = () => {
    let tile11 = document.getElementById('1-1');
    tile11.classList.remove('player-1');
    tile11.classList.remove('player-2');
    tile11.style.backgroundColor = 'inherit';

    let tile12 = document.getElementById('1-2');
    tile12.classList.remove('player-1');
    tile12.classList.remove('player-2');
    tile12.style.backgroundColor = 'inherit';

    let tile13 = document.getElementById('1-3');
    tile13.classList.remove('player-1');
    tile13.classList.remove('player-2');
    tile13.style.backgroundColor = 'inherit';

    let tile21 = document.getElementById('2-1');
    tile21.classList.remove('player-1');
    tile21.classList.remove('player-2');
    tile21.style.backgroundColor = 'inherit';

    let tile22 = document.getElementById('2-2');
    tile22.classList.remove('player-1');
    tile22.classList.remove('player-2');
    tile22.style.backgroundColor = 'inherit';

    let tile23 = document.getElementById('2-3');
    tile23.classList.remove('player-1');
    tile23.classList.remove('player-2');
    tile23.style.backgroundColor = 'inherit';

    let tile31 = document.getElementById('3-1');
    tile31.classList.remove('player-1');
    tile31.classList.remove('player-2');
    tile31.style.backgroundColor = 'inherit';

    let tile32 = document.getElementById('3-2');
    tile32.classList.remove('player-1');
    tile32.classList.remove('player-2');
    tile32.style.backgroundColor = 'inherit';

    let tile33 = document.getElementById('3-3');
    tile33.classList.remove('player-1');
    tile33.classList.remove('player-2');
    tile33.style.backgroundColor = 'inherit';

    setGameWinner(null);
  };

  return (
    <div>
      <h2>TicTacToe</h2>
      <div className='hud'>winner: {gameWinner}</div>
      <button onClick={() => newGame()}>new game</button>
      <div className='field' id='field'>
        <div className='tile' id='1-1' onClick={() => clicked('1-1')}></div>
        <div className='tile' id='1-2' onClick={() => clicked('1-2')}></div>
        <div className='tile' id='1-3' onClick={() => clicked('1-3')}></div>
        <div className='tile' id='2-1' onClick={() => clicked('2-1')}></div>
        <div className='tile' id='2-2' onClick={() => clicked('2-2')}></div>
        <div className='tile' id='2-3' onClick={() => clicked('2-3')}></div>
        <div className='tile' id='3-1' onClick={() => clicked('3-1')}></div>
        <div className='tile' id='3-2' onClick={() => clicked('3-2')}></div>
        <div className='tile' id='3-3' onClick={() => clicked('3-3')}></div>
      </div>
    </div>
  );
}
