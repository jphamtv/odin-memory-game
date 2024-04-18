export default function shuffleArray(array) {
  const shuffledArray = [...array].sort(() => 0.5 - Math.random());
  return shuffledArray;
}
