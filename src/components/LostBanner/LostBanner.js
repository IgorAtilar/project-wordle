import Banner from '../Banner';

function LostBanner({ answer = '', onGameRestart = () => {} }) {
  return (
    <Banner status='sad'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={onGameRestart} className='restart-btn'>
        Restart
      </button>
    </Banner>
  );
}

export default LostBanner;
