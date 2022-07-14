'use strict';
// DOM variables
const nav = document.querySelector('.nav');
const first = document.querySelector('#first');

window.addEventListener('scroll', () => {
  const locat = first.offsetTop - window.scrollY - 38.4 - nav.offsetHeight;
  console.log(locat < 0);
  if (locat <= 0) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
});

// console.log(nav.offsetHeight);
