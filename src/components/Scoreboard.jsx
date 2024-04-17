export function Scoreboard({ currentScore, highScore }) {
  return (
    <div className='scoreboard-container'>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}