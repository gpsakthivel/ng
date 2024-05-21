// Check null or undefined
const myVar = 'sam';
const result = myVar === '' || myVar === null || myVar === undefined ? null : myVar;
const isNullOrUndefined = (value) => value === '' || value === null || value === undefined ? false : true;
console.log(isNullOrUndefined('sam'))