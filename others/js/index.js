// Below function is not working - Need to check
// Capitalize every word in a sentence
const sentence = 'Welcome to arc tutorial';
const capitalizeFirstChar = (sentence) =>
  sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
console.log(capitalizeFirstChar(sentence));