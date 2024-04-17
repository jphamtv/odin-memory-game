import { useEffect, useState } from "react";
import Card from './Card'
import shuffleArray from "../utils/shuffleArray";
import '../styles/GameBoard.css'

export default function GameBoard({ drivers, onGameOver, onScoreUpdate }) {
  const [shuffledDrivers, setShuffledDrivers] = useState([]);
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (drivers.length > 0) {
      setShuffledDrivers(shuffleArray(drivers));
    }
    console.log(`GameBoard triggered`)
    console.log(drivers)

  }, [drivers]);

  const handleCardClick = (driver) => {
    if (!selectedDrivers.includes(driver)) {
      setSelectedDrivers([...selectedDrivers, driver]);
      setShuffledDrivers(shuffleArray(drivers));
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