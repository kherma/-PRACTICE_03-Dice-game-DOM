'use strict';

// Selecting players scores
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
scorePlayerOne.textContent = 0;
scorePlayerTwo.textContent = 0;

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

btnRollDice.addEventListener('click', function(){

    // 1. Generating random number in range 1 to 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    // 2. Display the the dice image that represent generated number
    dice.classList.remove('hide');
    dice.src = `dice-${randomNumber}.png`

    // 3. Check for rollde 1 True ? change player : hold/roll
    if (randomNumber === 1) {
        selectPlayerOne.classList.toggle('player--active');
        selectPlayerTwo.classList.toggle('player--active');
        dice.classList.add('hide');
    }
});