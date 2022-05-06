'use strict';

const message = document.querySelector('.message')
const number = document.querySelector('.number')
const scoreNumber = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const guessNumber = document.querySelector('.guess')
const secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber);
let score = 20


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guessNumber.value)

    //when there is no input value inserted by the user
    if (!guess) {
        message.textContent = "🛑 No Number!"
    }
    //when user guesses right number
    else if (secretNumber === guess) {
        message.textContent = 'Correct Number 🏆'
        document.body.style.backgroundColor = 'green'
        number.style.width = '30rem'
        number.textContent = secretNumber
        highscore.textContent = score
    }
    // when is Incorrect
    else if (guess > secretNumber) {
        message.textContent = 'Too High ⬆️'
        score--
        scoreNumber.textContent = score

        if (score < 1) {
            message.textContent = 'You lost the Game!😢'

            document.body.style.backgroundColor = 'red'

            scoreNumber.textContent = '0'
        }
    }
    else if (guess < secretNumber) {
        message.textContent = 'Too low ⬇️'
        score--
        scoreNumber.textContent = score

        if (score < 1) {
            message.textContent = 'You lost the Game! 😢'
            document.body.style.backgroundColor = 'red'
            scoreNumber.textContent = '0'
        }
    }
})

// Refresh the web Page or Reload 

// document.querySelector('.again').addEventListener('click', function () {
//     window.location.reload()
// })


document.querySelector('.again').addEventListener('click' , function(){
    message.textContent = 'Start guessing...'
    scoreNumber.textContent = 20
    score = 20
    number.textContent = '?'
    document.body.style.backgroundColor = '#222'
    number.style.width = '15rem'
    guessNumber.value = ''
})