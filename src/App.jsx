import { useState } from 'react'
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import './App.css'

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <div className='score-container'>
        <Scoreboard label='Your Score:' score={currentScore} className='current-score' />
        <Scoreboard label='High Score:' score={highScore} className='high-score' />
      </div>
      <GameBoard />
    </>
  )
}
