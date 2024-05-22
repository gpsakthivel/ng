// Generate an array range
const generateArrayRange = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index);
  const rangeBetween100To150 = generateArrayRange(8, 15);
  console.log(rangeBetween100To150);