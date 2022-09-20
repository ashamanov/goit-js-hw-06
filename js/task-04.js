const buttonDecrement = document.querySelector("[data-action='decrement']");
const span = document.querySelector("#value");
const buttonIncrement = document.querySelector("[data-action='increment']");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);