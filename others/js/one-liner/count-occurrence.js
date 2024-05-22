// Count number of occurrences
const myArray = [1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 7, 8, 9, 10];
const countOccurences = (arr) =>
  arr.reduce(
    (count, value) => (count[value] = (count[value] || 0) + 1,
    count),
    {}
  );
console.log(countOccurences(myArray))