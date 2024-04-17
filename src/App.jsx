import { useEffect, useState } from 'react'
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import Button from './components/Button';
import { getDriverData } from './utils/fetchDriverData';
import './App.css'

export default function App() {
  const [drivers, setDrivers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const driverData = getDriverData();
      setDrivers(driverData);
      setShuffledDrivers(shuffleArray(driverData));
    }

    fetchData();
  }, []);

  const onScoreUpdate = () => {
    setCurrentScore(currentScore + 1);
  }

  const onGameOver = () => {
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

  const handleReset = () => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    
    setDrivers([]);
    setCurrentScore(0);
  }

  return (
    <>
      <div className='score-container'>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      <GameBoard
        drivers={drivers}
        onGameOver={onGameOver}
        onScoreUpdate={onScoreUpdate}
      />
    </>
  )
}
