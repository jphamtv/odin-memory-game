import '../styles/Card.css';

export default function Card({ driver, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={driver.image} alt={driver.name} />
      <div className='name'>
        {driver.name}
      </div>
    </div>
  );
}