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
  one.textContent = randomNumber();
  two.textContent = randomNumber();
}
mulitply();
