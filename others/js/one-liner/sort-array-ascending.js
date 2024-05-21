// Sort array - ascending
const unsortedArray = [1, 4, 7, 3, 5, 6, 7];
const ascSortedArray = (array) => array.slice().sort((a, b) => a - b);
console.log(ascSortedArray(unsortedArray));