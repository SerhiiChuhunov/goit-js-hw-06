const counterBatonsEl = document.getElementById('counter')
const counterValue = document.getElementById('value')
let counter = 0

counterBatonsEl.firstElementChild.addEventListener('click', event => {
  counterValue.textContent = counter -= 1;
})
counterBatonsEl.lastElementChild.addEventListener('click', event => {
  counterValue.textContent = counter += 1;
})