// Get the mouse selection
const getselectedText = () => window.getSelection().toString();
document.addEventListener('mouseup', () => {
  const selectedText = getselectedText();
  console.log(selectedText);
});