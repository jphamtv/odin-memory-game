import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/logo_f1_white.svg';
import '../styles/Card.css';

export default function Card({ key, driver, onClick, isFlipping }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isFlipping) return;
    onClick();
  }
  
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
          <img className='card-back-logo' src={Logo} alt='Formula One logo' />
        </div>  
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.string,
  driver: PropTypes.string,
  onClick: PropTypes.func,
  isFlipping: PropTypes.bool,
}