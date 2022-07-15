'use strict';

const btn = document.querySelector('.btn');
const close = document.querySelector('.icon');
const vid = document.querySelector('.vid');
const trailerContainer = document.querySelector('.trailer-container');
console.log(trailerContainer);
btn.addEventListener('click', e => {
  e.preventDefault();
  trailerContainer.style.zIndex = 1;
  trailerContainer.style.opacity = 1;
});

close.addEventListener('click', () => {
  vid.pause();
  vid.currentTime = 0;
  vid.load();
  trailerContainer.style.zIndex = -1;
  trailerContainer.style.opacity = 0;
});
