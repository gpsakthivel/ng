// Convert array of string to numbers
const strArray = ['1','2','3','4','5']
console.log(strArray);
const convetedArray = (array) => array.map(Number);
console.log(convetedArray(strArray))
