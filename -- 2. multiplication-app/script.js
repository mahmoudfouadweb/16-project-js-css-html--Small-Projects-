'use strict';

// GENERAL VARIABLES
const score = document.querySelector('.score-value');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.btn');

// variables validation
// console.log(score, one, two, answer, btn);

// helper variable
let userScore = JSON.parse(localStorage.getItem('score'));
if (!userScore) {
  userScore = 0;
}
const num2 = randomNumber();
const num1 = randomNumber();

// multiplication
const result = num1 * num2;
console.log('result', result);

// random numbers function
function randomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

// updateUI function
function updateUI() {
  one.textContent = num1;
  two.textContent = num2;
  score.textContent = userScore;
}
document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  btn.addEventListener('click', function (e) {
    // e.preventDefault();
    let userInput = +answer.value;
    if (result == userInput) {
      console.log('true');
      userScore++;
      updateLocalstorage();
      score.textContent = userScore;
      console.log('result', result);
      updateUI();
    } else {
      console.log('false');
      userScore--;
      updateLocalstorage();
      score.textContent = userScore;
      console.log('result', result);
      updateUI();
    }
  });
});

// local storage
const updateLocalstorage = function () {
  localStorage.setItem('score', JSON.stringify(userScore));
};
