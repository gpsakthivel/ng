// Check if array / object are equal
const compareVariablesEqual = (var1, var2) =>
    JSON.stringify(var1) === JSON.stringify(var2);
  const array1 = [1, 3, 5, 8, 9];
  const array2 = [1, 3, 5, 0, 9];
  console.log(compareVariablesEqual(array1, array2));
  const obj1 = { x: 1, y: 3, z: 5 };
  const obj2 = { x: 1, y: 3, z: 5 };
  console.log(compareVariablesEqual(obj1, obj2));