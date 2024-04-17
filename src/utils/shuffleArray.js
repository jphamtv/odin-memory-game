export default function shuffleArray(array) {
  const shuffledDrivers = array.sort(() => 0.5 - Math.random());

  return shuffledDrivers;
}
