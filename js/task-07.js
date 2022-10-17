const fontSizeControl = document.getElementById('font-size-control')
const textContentEl = document.getElementById('text')
textContentEl.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl, addEventListener('input', event => {
  textContentEl.style.fontSize = `${fontSizeControl.value}px`;
})