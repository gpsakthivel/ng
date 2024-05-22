// Reserve a string
const reverseString = (str) => str.split('').reverse().join('');
const originalString = 'sam';
const reserveString = reverseString(originalString);
console.log(reserveString);