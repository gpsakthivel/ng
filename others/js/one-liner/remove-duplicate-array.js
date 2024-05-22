// Remove duplicates from Array
const removeDuplicates = (arr) => [...new Set(arr)];
const uniqueArray = [1, 3, 5, 7,3, 2, 6, 8,3, 5, 6]
console.log(removeDuplicates(uniqueArray));