'use strict';

// DOM Variables

const container = document.querySelector('.container');

for (let i = 0; i < 36; i++) {
  const colorCard = document.createElement('div');
  colorCard.classList.add('color-card');
  colorCard.textContent = '#';
  container.insertAdjacentElement('afterbegin', colorCard);
}

const allColors = document.querySelectorAll('.color-card');
console.log(allColors.length);

function colorGenerator() {
  allColors.forEach(color => {
    color.textContent = hex();
    color.style.backgroundColor = hex();
    color.style.color = '#fff';
  });
}
colorGenerator();

function hex() {
  const char = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * char.length);
    color += char.substring(random, random + 1);
    console.log(color, random);
  }
  console.log(color);
  return color;
}
hex();
