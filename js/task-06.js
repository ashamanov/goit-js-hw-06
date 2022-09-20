const input = document.querySelector('input')

function blurHandler() {
    if (input.value.length === 0) {
        input.classList.remove('invalid')
        input.classList.remove('valid')
    } else if (input.value.length === 6) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}

input.addEventListener("blur", blurHandler)