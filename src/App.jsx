import { useEffect, useState } from 'react'
import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import GameOver from './components/GameOver';
import { getDriverData } from './utils/fetchDriverData';
import './App.css'

export default function App() {
  const [drivers, setDrivers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const driverData = await getDriverData();
      setDrivers(driverData);
      setIsLoading(false);

      console.log('App triggered')
    }

    fetchData();
  }, []);

  const onScoreUpdate = () => {
    setCurrentScore(currentScore + 1);
  };

  const onGameOver = () => {
    setIsGameOver(true);
    
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    
  };

  const handleReset = () => {
    console.log('Reset triggered')
    

    setCurrentScore(0);
    setIsGameOver(false);
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='score-container'>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
      </div>
      {!isGameOver ? (
        <GameBoard
          drivers={drivers}
          onGameOver={onGameOver}
          onScoreUpdate={onScoreUpdate}
        />
      ) : (
        <GameOver currentScore={currentScore} onClick={handleReset}/>
      )}
    </>
  )
}
