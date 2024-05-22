// Wait for certain amount of time
const waitForTime = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
console.log('Start')
waitForTime(3000).then(() => {
  console.log('wait for 3 seconds...');
});