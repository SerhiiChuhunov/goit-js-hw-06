function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxesEl = document.querySelectorAll('#controls button');
const boxesEl = document.getElementById('boxes');


createBoxesEl[0].addEventListener('click', event => {
  const numEl = document.querySelector('#controls input');

  for (let i = 0; i < numEl.value; i += 1) {
    const createDiv = document.createElement('div');
    boxesEl.append(createDiv);

  }
  const divArrayEl = boxesEl.children;
  const startSize = 30;

  for (let i = 0; i < divArrayEl.length; i += 1) {
    divArrayEl[i].style.width = `${startSize + 10 * i}px`;
    divArrayEl[i].style.height = `${startSize + 10 * i}px`;
    divArrayEl[i].style.backgroundColor = getRandomHexColor();
    divArrayEl[i].style.marginTop = '15px';
  }

  numEl.value = "";
})

createBoxesEl[1].addEventListener('click', event => {
  const remomeDivs = document.querySelectorAll('#boxes > div');
  remomeDivs.forEach(param => param.remove());
}
)