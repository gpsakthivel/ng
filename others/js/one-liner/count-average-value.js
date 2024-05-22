// Get average of multiple numbers
const calculateAvg = (...numbers) =>
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  console.log(calculateAvg(1, 3, 5, 7, 8, 9));