'use strict';

// DOM Variables

const text = document.querySelector('.text');
const total = document.querySelector('.total');
const remaining = document.querySelector('.remaining');

// function
text.addEventListener('input', e => {
  let totl = 50;

  console.log(e.target.value);
});
