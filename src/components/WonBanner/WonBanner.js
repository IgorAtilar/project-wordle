import Banner from '../Banner';

function WonBanner({ numOfGuesses = 0, onGameRestart = () => {} }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={onGameRestart} className='restart-btn'>
        Restart
      </button>
    </Banner>
  );
}

export default WonBanner;
