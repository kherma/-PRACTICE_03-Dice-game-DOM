'use strict';

// Select buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Selecting players scores
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');

// Select players
const selectPlayerOne = document.querySelector('.player--0');
const selectPlayerTwo = document.querySelector('.player--1');

// Select dice
const dice = document.querySelector('.dice');

// Declare current score
// Declare active player
// 0 - player one, 1 - player two
// Initial value is 0 because player one always starts the game
// Declare players scores
// Is the game playing?
let currentScore, activePlayer, playerScores, playing;

function gameInit() {
    playing = true;
    playerScores = [0, 0];
    activePlayer = 0;
    currentScore = 0;

    scorePlayerOne.textContent = playerScores[0];
    scorePlayerTwo.textContent = playerScores[1];
    document.getElementById('current--0').textContent = 0;   
    document.getElementById('current--1').textContent = 0;
    
    dice.classList.add('hide');
    selectPlayerOne.classList.remove('player--winner');
    selectPlayerTwo.classList.remove('player--winner');
    selectPlayerOne.classList.add('player--active');   
    selectPlayerTwo.classList.remove('player--active');   
}

// Player Switcher
function switchPlayers() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    selectPlayerOne.classList.toggle('player--active');
    selectPlayerTwo.classList.toggle('player--active');
    dice.classList.add('hide');
}

// Dice Roll function
btnRollDice.addEventListener('click', function(){
    if (playing) {
        // 1. Generating random number in range 1 to 6
        const randomNumber = Math.floor(Math.random() * 6 + 1);
    
        // 2. Display the the dice image that represent generated number
        dice.classList.remove('hide');
        dice.src = `dice-${randomNumber}.png`
    
        // 3. Check for rollde 1 True ? change player : update current score
        if (randomNumber === 1) {
            switchPlayers();switchPlayers
        } else {
            currentScore += randomNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
});

// Hold Score function
btnHold.addEventListener('click', function(){
    if (playing){
        playerScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = playerScores[activePlayer];
    
        if(playerScores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hide');
            currentScore = 0;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayers();
        }
    }
});

// New game function
btnNewGame.addEventListener('click', gameInit);

gameInit();