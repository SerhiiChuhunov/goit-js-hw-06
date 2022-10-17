function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColorEl = document.querySelector('.color')
const btnChangeBackgroundColorEl = document.querySelector('.change-color')

btnChangeBackgroundColorEl.addEventListener('click', event => {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor
  backgroundColorEl.textContent = randomColor
})