const input = document.querySelector("input");
const span = document.querySelector("span");

function inputHandler(event) {
  if (input.value === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.target.value;
  }
}

input.addEventListener("input", inputHandler)