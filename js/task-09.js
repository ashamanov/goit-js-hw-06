function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const div = document.querySelector('div')
const button = document.querySelector('button')
const span = document.querySelector('span')

function clickHandler() {
  div.parentNode.style.backgroundColor = getRandomHexColor()
  span.textContent = getRandomHexColor()
}

button.addEventListener("click", clickHandler)