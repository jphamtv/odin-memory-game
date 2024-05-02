import PropTypes from 'prop-types';
import '../styles/Scoreboard.css'

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className='scoreboard-container'>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number,
}