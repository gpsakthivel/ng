// Generate random color
const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
console.log(randomHexColor);
document.body.style.backgroundColor = randomHexColor;