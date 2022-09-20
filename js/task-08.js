const form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.target.reset();
}

form.addEventListener("submit", handleSubmit);