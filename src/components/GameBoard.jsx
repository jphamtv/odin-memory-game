import { useEffect, useState } from "react";
import Card from './Card'
import shuffleArray from "../utils/shuffleArray";
import '../styles/GameBoard.css'

export default function GameBoard({ drivers, onGameOver, onScoreUpdate }) {
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [shuffledDrivers, setShuffledDrivers] = useState(shuffleArray([...drivers]));
  const [score, setScore] = useState(0);

  const handleCardClick = (driver) => {
    if (!selectedDrivers.includes(driver)) {
      setSelectedDrivers([...selectedDrivers, driver]);
      setShuffledDrivers(shuffleArray([...drivers]));
      setScore(score + 1);
      onScoreUpdate(score + 1);
    } else {
      onGameOver();
      setSelectedDrivers([]);
      setScore(0);
    }
  };

  return (
    <div className="card-grid">
      {shuffledDrivers.map((driver) => (
        <Card
          key={driver.name}
          driver={driver} onClick={() => handleCardClick(driver)}
        />
      ))}
    </div>
  );
}