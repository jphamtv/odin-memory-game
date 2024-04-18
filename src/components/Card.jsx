import '../styles/Card.css';

export default function Card({ key, driver, onClick }) {
  return (
    <div className='card' onClick={onClick} key={key}>
      <img src={driver.image} alt={driver.name} />
      <div className='name'>
        {driver.name}
      </div>
    </div>
  );
}