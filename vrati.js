// score0El.textContent = 0;
// score1El.textContent = 0;
// let currentScore = 0;
// let playerActive = 0;
// const score = [0, 0];
// let playing = true;
// diceEl.classList.add('hidden');

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     let dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.src = `dice-${dice}.png`;
//     diceEl.classList.remove('hidden');

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${playerActive}`).textContent =
//         currentScore; //Promeni u aktivnog igraca
//     } else {
//       //Resetuj sve poene na aktivnom igracu
//       document.getElementById(`current--${playerActive}`).textContent = 0;
//       currentScore = 0;
//       player0El.classList.toggle('player--active');
//       player1El.classList.toggle('player--active');
//       // Promeni u drugog igraca
//       playerActive = playerActive === 0 ? 1 : 0;
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //Kada se klikne dugme hold prebacuje se iz current score u veliki score za aktivnog igraca
//     score[playerActive] += currentScore;
//     document.getElementById(`score--${playerActive}`).textContent =
//       score[playerActive];
//     if (score[playerActive] >= 20) {
//       playing = false;
//       document
//         .querySelector(`.player--${playerActive}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${playerActive}`)
//         .classList.add('player--active', 'name');
//       diceEl.classList.add('hidden');
//     }
//     // Resetuje se current score za aktivnog igraca
//     document.getElementById(`current--${playerActive}`).textContent = 0;
//     currentScore = 0;
//     //Promeni player--active klasu
//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
//     //Promeni igraca
//     playerActive = playerActive === 0 ? 1 : 0;
//   }
// });

// btnNew.addEventListener('click', function () {
//     playing = true;
//     diceEl.classList.add('hidden');
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
//     document.querySelector(`.player--0`).classList.remove('player--winner');
//     document.querySelector(`.player--1`).classList.remove('player--winner');
//     score0El = 0;
//     score0El.textContent = 0;
//     score1El = 0;
//     score1El.textContent = 0;
//     currentScore.textContent = 0;
//   });
