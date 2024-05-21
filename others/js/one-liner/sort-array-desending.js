// Sort array - descending
const unsortedArr = [1, 4, 7, 3, 5, 6, 7];
const descSortedArray = (array) => array.slice().sort((a, b) => b - a);
console.log(descSortedArray(unsortedArr));