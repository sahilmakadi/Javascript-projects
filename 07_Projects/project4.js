let randomNumber = parseInt(Math.random()*100 + 1)
console.log(randomNumber);

const submit = document.querySelector('#submitButton')
// we will use number after as userNumber.value
const userNumber = document.querySelector('#number')
const guesses = document.querySelector('.guesses')
const remainingChances = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userNumber.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage('Game Over, Random number was ' + randomNumber)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage("You guessed it right")
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("Number is low")
    } else {
        displayMessage("Number is high")
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess) {
    userNumber.value = ''
    guesses.innerHTML += `${guess} ` 
    numGuess++;
    remainingChances.innerHTML = `${11 - numGuess}`
}

function endGame() {
    userNumber.value = ''
    userNumber.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function() {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1;
        guesses.innerHTML = ''
        remainingChances.innerHTML=  ''
        userNumber.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('')   
        playGame = true
    })
}