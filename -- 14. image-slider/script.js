'use strict';

// DOM variables
const container = document.querySelector('.image-container');
const imgs = document.querySelectorAll('.img');
const right = document.querySelector('.next');
const left = document.querySelector('.prev');
let current = 1;
let timeout;
const imgLenght = imgs.length;
///////////////////////////////////////////////////////

right.addEventListener('click', () => {
  clearTimeout(timeout);
  current++;
  updateUI();
});

left.addEventListener('click', () => {
  clearTimeout(timeout);
  current--;
  updateUI();
});

function updateUI() {
  if (current > imgLenght) {
    current = 1;
  } else if (current < 1) {
    current = imgLenght;
  }
  container.style.transform = `translateX(-${(current - 1) * 500}px)`;
  timeout = setTimeout(() => {
    current++;
    updateUI();
  }, 3000);
}
updateUI();
