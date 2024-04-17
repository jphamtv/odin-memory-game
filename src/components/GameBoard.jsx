import { useState } from "react";
import { Card } from "./Card";

export default function GameBoard({ drivers, onGameOver, onScoreUpdate }) {
  const [shuffledDrivers, setShuffledDrivers] = useState(shuffleArray(drivers));
  const [selectedDrivers, setSelectedDrivers] = useState([]);
  const [score, setScore] = useState(0);

  const handleCardClick = (driver) => {
    if (!selectedDrivers.includes(driver)) {
      setSelectedDrivers([...selectedDrivers, driver]);
      setShuffledDrivers(shuffleArray(drivers));
      setScore(score + 1);
      onScoreUpdate(score + 1);
    } else {
      onGameOver();
    }
  };

  const shuffleArray = (array) => {
    // TODO: array shuffling logic
    return shuffledDrivers;
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