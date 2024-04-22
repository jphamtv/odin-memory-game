import { useEffect, useState } from "react";
import Card from './Card'
import shuffleArray from "../utils/shuffleArray";
import '../styles/GameBoard.css'

export default function GameBoard({ drivers, onGameOver, onScoreUpdate }) {
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [shuffledDrivers, setShuffledDrivers] = useState(shuffleArray([...drivers]));
  const [score, setScore] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleCardClick = (driver) => {
    if (isFlipping) return;

    if (!selectedDrivers.includes(driver.name)) {
      setSelectedDrivers([...selectedDrivers, driver.name]);
      setScore(score + 1);
      onScoreUpdate(score + 1);
      setIsFlipping(true);
    } else {
      onGameOver();
      setSelectedDrivers([]);
      setScore(0);
    }
  };

  useEffect(() => {
    if (isFlipping) {
      const timeoutId = setTimeout(() => {
        setShuffledDrivers(shuffleArray([...drivers]));
        setTimeout(() => {
          setIsFlipping(false);
        }, 600); // Match the flip animation transition timing
      }, 400); // Adjust for pause length

      return () => clearTimeout(timeoutId);
    }
  }, [isFlipping, drivers]);

  return (
    <div className="card-grid">
      {shuffledDrivers.map((driver) => (
        <Card
          key={driver.name}
          driver={driver}
          onClick={() => handleCardClick(driver)}
          isFlipping={isFlipping}
        />
      ))}
    </div>
  );
}