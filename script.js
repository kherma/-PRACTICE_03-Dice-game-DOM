'use strict';

// Declare current score
let currentScore = 0;

// Declare active player
// 0 - player one, 1 - player two
// Initial value is 0 because player one always starts the game
let activePlayer = 0;

// Declare players scores
let playerScores = [0, 0];

// Selecting players scores
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
scorePlayerOne.textContent = playerScores[0];
scorePlayerTwo.textContent = playerScores[1];

// const currentPlayerOne = document.getElementById('current--0');
// const currentPlayerTwo = document.getElementById('current--1');

// Select players
const selectPlayerOne = document.querySelector('.player--0');
const selectPlayerTwo = document.querySelector('.player--1');

// Select dice
const dice = document.querySelector('.dice');
dice.classList.add('hide');

// Select buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Dice Roll function
btnRollDice.addEventListener('click', function(){

    // 1. Generating random number in range 1 to 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    // 2. Display the the dice image that represent generated number
    dice.classList.remove('hide');
    dice.src = `dice-${randomNumber}.png`

    // 3. Check for rollde 1 True ? change player : update current score
    if (randomNumber === 1) {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        selectPlayerOne.classList.toggle('player--active');
        selectPlayerTwo.classList.toggle('player--active');
        dice.classList.add('hide');
    } else {
        currentScore += randomNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
});