'use strict';

// GENERAL VARIABLES
const score = document.querySelector('.score-value');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.btn');

// variables validation
// console.log(score, one, two, answer, btn);

// random numbers function

function randomNumber() {
  return Math.floor(Math.random() * 9 + 1);
}

// multiply function
function mulitply() {
  const first = randomNumber();
  const second = randomNumber();
  console.log(answer);
  one.textContent = first;
  two.textContent = second;
  return first * second;
}
let result = mulitply();
console.log('result', result);

btn.addEventListener('click', function (e) {
  // e.preventDefault();
  let userInput = Number(answer.value);
  let userScore = 0;
  if (result == userInput) {
    console.log('true');
    userScore++;
    score.textContent = userScore;
    mulitply();
    console.log(result);
  } else {
    console.log('false');
    userScore--;
  }
});
