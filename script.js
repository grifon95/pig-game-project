'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const player1NameEl = document.getElementById('name--0');
const player2NameEl = document.getElementById('name--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting values
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let playerActive = 0;
let isPlayable = true;
const scores = [0, 0];
diceEl.classList.add('hidden');
const name1 = prompt('Enter name of player 1: ');
player1NameEl.textContent = name1;
const name2 = prompt('Enter name of player 2: ');
player2NameEl.textContent = name2;

// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (isPlayable) {
    let dice = Math.trunc(Math.random() * 6) + 1; // Dice 1-6. When we click btn Roll dice will be 1-6 every time some number
    diceEl.src = `dice-${dice}.png`; // We will use dice number to dinamicly change picture depends on dice number
    diceEl.classList.remove('hidden'); // We display dice element
    console.log(dice);
    if (dice !== 1) {
      // If dice is not 1 (2-6) do this
      currentScore += dice;
      document.getElementById(`current--${playerActive}`).textContent =
        currentScore; // Depends on active player change current score of active player for now player 1 is active
    } else {
      // If dice is 1 then change player, lose all current points, and change class of active player
      currentScore = 0;
      document.getElementById(`current--${playerActive}`).textContent = 0;
      playerActive = playerActive === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

// Hold button functionality
btnHold.addEventListener('click', function () {
  if (isPlayable) {
    // When we click hold button move from current score of active player to big score
    scores[playerActive] += currentScore;
    document.getElementById(`score--${playerActive}`).textContent =
      scores[playerActive]; // We update big scores of active player
    // Change active player, put current score to 0 and change active player class
    if (scores[playerActive] >= 100) {
      // If someone gets 50 or more points and click hold button he wins and get winner class
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      isPlayable = false;
      if (scores[0] > scores[1]) {
        alert(`${name1} has won!`);
      } else {
        alert(`${name2} has won`);
      }
    }
    currentScore = 0;
    document.getElementById(`current--${playerActive}`).textContent = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

// New game functionality
btnNew.addEventListener('click', function () {
  isPlayable = true;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  playerActive = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
