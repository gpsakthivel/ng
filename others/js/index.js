// Generate random number between two numbers
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomNumberBetweenValues = getRandomNumber(50, 300);
console.log(randomNumberBetweenValues);

// Generate an array range
const generateArrayRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);
const rangeBetween100To150 = generateArrayRange(8, 15);
console.log(rangeBetween100To150);

// Check if value is Truthy
const isTruthy = (value) => Boolean(value);
console.log(isTruthy(['1', '3']));
console.log(isTruthy(0)); // Tricky

// Remove duplicates from Array
const removeDuplicates = (arr) => [...new Set(arr)];
const uniqueArray = [1, 3, 5, 7,3, 2, 6, 8,3, 5, 6]
console.log(removeDuplicates(uniqueArray));

// Check if string starts with prefix
const startsWithPrefix = (str, prefix) => str.startsWith(prefix);
console.log(startsWithPrefix('Sam Mendes', 'Sam'));
console.log(startsWithPrefix('Sam Mendes', 'Mendes'));

// Check if string starts with prefix
const endsWithSuffix = (str, suffix) => str.endsWith(suffix);
console.log(endsWithSuffix('Sam Mendes', 'Sam'));
console.log(endsWithSuffix('Sam Mendes', 'Mendes'));

// Check if string starts with prefix
const generateRandomString = (length) => Array.from({length}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("");
console.log(generateRandomString(6));

// Get average of multiple numbers
const calculateAvg = (...numbers) =>
  numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log(calculateAvg(1, 3, 5, 7, 8, 9));

// Merge two arrays
const mergeArray = (array1, array2) => [...array1, ...array2];
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(mergeArray(array1, array2));

// Shuffle an array
const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
const orginalArrayValue = [1, 3, 5, 7, 9];
const shuffleArrayValue = shuffleArray(orginalArrayValue);
console.log(shuffleArrayValue);

// Get the mouse selection
const getselectedText = () => window.getSelection().toString();
document.addEventListener('mouseup', () => {
  const selectedText = getselectedText();
  console.log(selectedText);
});

// Check if number is odd or even
const isEven = (number) => number % 2 === 0;
console.log(isEven(11));

// Swap two variables
let a = 10,
  b = 20;
[a, b] = [b, a];
console.log(a, b);

//Not working
// Capitalize every word in a sentence
// const sentence = 'Welcome to arc tutorial';
// const capitalizeFirstChar = (sentence) =>
//   sentence
//     .split(' ')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// console.log(capitalizeFirstChar(sentence));
// Not working

// Reserve a string
const reverseString = (str) => str.split('').reverse().join('');
const originalString = 'sam';
const reserveString = reverseString(originalString);
console.log(reserveString);

// Wait for certain amount of time
const waitForTime = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
console.log('Start')
waitForTime(3000).then(() => {
  console.log('wait for 3 seconds...');
});

// Count number of occurrences
const myArray = [1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 7, 8, 9, 10];
const countOccurences = (arr) =>
  arr.reduce(
    (count, value) => (count[value] = (count[value] || 0) + 1,
    count),
    {}
  );
console.log(countOccurences(myArray))

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

// Palindrome
const isPalindrome = (str) => str === str.split('').reverse().join(''); // To reverse a string
console.log(isPalindrome('madam'))
console.log(isPalindrome('sam'))

// Generate random color
const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
console.log(randomHexColor);
document.body.style.backgroundColor = randomHexColor;

// Convert array of string to numbers
const strArray = ['1','2','3','4','5']
console.log(strArray);
const convetedArray = (array) => array.map(Number);
console.log(convetedArray(strArray))





