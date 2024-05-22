// Generate random number between two numbers
const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumberBetweenValues = getRandomNumber(50, 300);
  console.log(randomNumberBetweenValues);