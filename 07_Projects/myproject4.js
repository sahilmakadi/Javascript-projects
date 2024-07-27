const userInput = document.querySelector('#number')
const submit = document.querySelector('#submitButton')
const guesses = document.querySelector('.guesses')
const remainingChoice = document.querySelector('.lastResult')
const display = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber);
let playGame = true
let chancesPlayed = 0

const p = document.createElement('p')

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
        chancesPlayed++
        guesses.innerHTML += `${number} `
        remainingChoice.innerHTML = `${10 - chancesPlayed}`
        checkEquality(number)
    }
}

function checkEquality(number) {
    if (chancesPlayed < 10) {
        if (number === randomNumber) {
            displayMessage("You guessed it right!! the number was " + `${number}`)
            endGame();
        } else if (number < randomNumber) {
            displayMessage("Your number is lower")
        } else {
            displayMessage("Your number is higher")
        }
        return;
    }
    endGame();
}

function displayMessage(message) {
    display.innerHTML = `${message}`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.innerHTML = `<button style="background-color: #000; color: #fff; padding: 20px 50px; font-size: 150%;" id="newGame">Wanna play again?</button>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click', function(e) {
        e.preventDefault();
        randomNumber = parseInt(Math.random()*100 + 1);
        chancesPlayed = 0;
        guesses.innerHTML = ''
        remainingChoice.innerHTML = '10'
        startOver.removeChild(p)
        userInput.removeAttribute('disabled')
        displayMessage('')
        playGame = true
    })
}