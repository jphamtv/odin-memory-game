export function Scoreboard({ label, score, className }) {
  return (
    <div className={className}>
      <p>{label}</p>
      <div>{score}</div>
    </div>
  );
}