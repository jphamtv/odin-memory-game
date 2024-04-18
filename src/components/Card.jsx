import { useState } from 'react';
import '../styles/Card.css';

export default function Card({ key, driver, onClick }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onClick();
  }

  return (
    <div className='card' onClick={onClick} key={key}>
      <img src={driver.image} alt={driver.name} />
      <div className='name'>
        {driver.name}
      </div>
    </div>
  );
}