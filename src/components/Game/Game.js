import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import Keyboard from '../Keyboard';

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [gameStatus, setGameStatus] = useState('running');
  const [guesses, setGuesses] = useState([]);

  function addGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    setGuesses(nextGuesses);
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGameStatus('running');
    setGuesses([]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameStatus !== 'running'} />
      <Keyboard guesses={guesses} answer={answer} />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          onGameRestart={handleRestart}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} onGameRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
