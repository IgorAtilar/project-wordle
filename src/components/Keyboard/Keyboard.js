import { checkGuess } from '../../game-helpers';

const KEYBOARD_KEYS_1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

const KEYBOARD_KEYS_2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

const KEYBOARD_KEYS_3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

function Key({ value, status }) {
  const className = status ? `keyboard-key ${status}` : 'keyboard-key';
  return <div className={className}>{value}</div>;
}

function Keyboard({ guesses = [], answer = '' }) {
  const results =
    guesses.map((guess) => checkGuess(guess, answer)).flat() || [];

  function mapKeyToResult(key) {
    const { status } =
      results.findLast((result) => result.letter === key) || {};

    return {
      key,
      status,
    };
  }
  const keysOneResults = KEYBOARD_KEYS_1.map(mapKeyToResult);

  const keysTwoResults = KEYBOARD_KEYS_2.map(mapKeyToResult);

  const keysThreeResults = KEYBOARD_KEYS_3.map(mapKeyToResult);

  return (
    <div className='keyboard'>
      <div className='keyboard-section'>
        {keysOneResults.map(({ key, status }) => (
          <Key key={key} value={key} status={status} />
        ))}
      </div>
      <div className='keyboard-section'>
        {keysTwoResults.map(({ key, status }) => (
          <Key key={key} value={key} status={status} />
        ))}
      </div>
      <div className='keyboard-section'>
        {keysThreeResults.map(({ key, status }) => (
          <Key key={key} value={key} status={status} />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
