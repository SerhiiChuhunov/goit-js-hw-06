const inputText = document.getElementById("name-input");
const outputText = document.getElementById("name-output");

inputText.addEventListener('input', event => {
  if (inputText.value.length === 0) {
    outputText.textContent = 'Anonymous'
  } else { outputText.textContent = inputText.value }
})