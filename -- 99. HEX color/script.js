'use strict';

// GENERAL VARIABLES
const code = document.querySelector('.code'),
  btn = document.querySelector('.btn'),
  arr = 'abcdef0123456789';

// click event
btn.addEventListener('click', () => {
  let hash = '#';
  for (let i = 0; i < 6; i++) {
    hash += arr[Math.floor(Math.random() * arr.length)];
  }
  code.textContent = hash;
  document.body.style.backgroundColor = hash;
  document.body.style.transition = 'all 0.5s';
  return hash;
});
code.addEventListener('click', e => {
  navigator.clipboard.writeText(code.textContent);

  setTimeout(() => {
    document.querySelector('.copied').style.opacity = 0;
  }, 2000);

  document.querySelector('.copied').style.opacity = 1;
});
