// Check if a value is an object
const myObj = { name: 'Sam', website: 'http://sam.io' };
// const myObj = true; // Eg: Try with boolean value
const result = myObj !== null && typeof myObj == 'object';
console.log(result);