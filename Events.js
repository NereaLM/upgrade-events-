
window.onload = () => {
// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el  evento click que ejecute un console log con la información del evento del click
let body = document.querySelector('body')
let button = document.querySelector('#btnToClick')
button.innerText = 'click me'
button.addEventListener('click', () => {
    console.log('click me')
})


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let focusEvent = document.querySelector('input[class="focus"]')
focusEvent.addEventListener('focus', () => {
    console.log(focusEvent.value)
})


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let inputEvent = document.querySelector('input[class="value"]')
inputEvent.addEventListener('input', () => {
    console.log(inputEvent.value)
})

}

