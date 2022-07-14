'use strict';

// DOM Variables

const text = document.querySelector('.text');
const total = document.querySelector('.total');
const remaining = document.querySelector('.remaining');

// function
const counter = function () {
  const max = text.getAttribute('maxlength');
  remaining.textContent = max - text.value.length;
  total.textContent = text.value.length;
};
counter();
text.addEventListener('input', () => {
  counter();
});
