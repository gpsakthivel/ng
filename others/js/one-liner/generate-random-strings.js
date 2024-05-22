// Check if string starts with prefix
const generateRandomString = (length) => Array.from({length}, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("");
console.log(generateRandomString(6));