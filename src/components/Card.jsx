import { useEffect, useState } from 'react';
import Logo from '../assets/logo_f1_white.svg';
import '../styles/Card.css';

export default function Card({ key, driver, onClick, isFlipping }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isFlipping) return;
    onClick();
  }

  // useEffect(() => {
  //   if (isFlipping) {
  //     setIsFlipped(true);
  //   } else {
  //     setTimeout(() => {
  //       setIsFlipped(false);
  //     }, 600); // Match the flip animation timing
  //   }
  // }, [isFlipping]);
  
  useEffect(() => {
    setIsFlipped(isFlipping);
  }, [isFlipping]);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick} key={key}>
        <div className='card-front'>
          <img src={driver.image} alt={driver.name} />
          <div className='name'>
            {driver.name}
          </div>
        </div>
        <div className='card-back'>
          <img src={Logo} alt='Formula One logo' />
        </div>  
    </div>
  );
}