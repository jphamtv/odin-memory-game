import { Card } from "./Card";

export default function GameBoard({ drivers }) {

  return (
    <div className="card-grid">
      {drivers && 
        drivers.map((driver) => (
          <Card key={driver.name} driver={driver} />
      ))}
    </div>
  );
}