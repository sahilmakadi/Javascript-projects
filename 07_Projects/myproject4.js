const userInput = document.querySelector('#number')
const submit = document.querySelector('#submitButton')
const guesses = document.querySelector('.guesses')
const remainingChoice = document.querySelector('.lastResult')
const display = document.querySelector('.lowOrHi')

let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber);
let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const number = parseInt(userInput.value);
        checkValidity(number)
        userInput.value = '';  
    })
}

function checkValidity(number) {
    if (isNaN(number)) {
        alert("Enter a valid number")
    } else if (number < 1) {
        alert("Enter a number greater than 1")
    } else if (number > 100) {
        alert("Enter a number less than 100")
    } else {
        checkEquality(number)
    }
}

function checkEquality(number) {
    if (number === randomNumber) {
        displayMessage("You guessed it right!! the number was " + `${number}`)
    }
}

function displayMessage(message) {
    display.innerHTML = `${message}`
}