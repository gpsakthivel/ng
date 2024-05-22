// Flattening an array
const nestedArray1 = [1,2,[3,4],5,6];
const flattedArray1 = (array) => array.flat(); // Only 1 level
const nestedArray2 = [1,2,[3,4, [7, 8]],5,6];
const flattedArray2 = (array) => array.flat(2); // Only 2 level
const nestedArray3 = [1,2,[3,4, [7, 8, [9,8]]],5,6];
const flattedArray3 = (array) => array.flat(3); // Only 3 level
console.log(flattedArray1(nestedArray1))
console.log(flattedArray2(nestedArray2))
console.log(flattedArray3(nestedArray3))