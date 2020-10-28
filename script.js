'use strict';

// Selecting players scores
const scorePlayerOne = document.getElementById('score--0');
const scorePlayerTwo = document.getElementById('score--1');
scorePlayerOne.textContent = 0;
scorePlayerTwo.textContent = 0;

// Select dice
const dice = document.querySelector('.dice');
dice.classList.add('hide');