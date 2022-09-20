const input = document.querySelector('input')
const span = document.querySelector("span");

function inputHandler() {
  span.style.fontSize = input.value + "px"
}

input.addEventListener("input", inputHandler)