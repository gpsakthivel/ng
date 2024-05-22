// Shuffle an array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const orginalArrayValue = [1, 3, 5, 7, 9];
const shuffleArrayValue = shuffleArray(orginalArrayValue);
console.log(shuffleArrayValue);