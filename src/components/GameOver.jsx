import Button from "./Button";
import '../styles/GameOver.css'

export default function GameOver({ currentScore, onClick }) {
  return (
    <div className='game-over-container'>
      <div className="game-over-wrapper">
        <p>You selected {currentScore} different drivers</p>
        <Button
          label='Play Again'
          className='reset-button'
          onClick={onClick}
        />
      </div>
    </div>
  );
}