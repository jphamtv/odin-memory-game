import Button from "./Button";

export default function GameOver({ currentScore, handleReset }) {
  return (
    <div className='game-over-container'>
      <p>{currentScore} different drivers selected</p>
      <Button
        label='Play Again'
        className='reset-button'
        onClick={handleReset}
      />
    </div>
  );
}