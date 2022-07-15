'use strict';

const body = document.querySelector('body');

body.addEventListener('mousemove', e => {
  const random = Math.random() * 100;
  const x = e.offsetX;
  const y = e.offsetY;
  const span = document.createElement('span');
  span.style.left = x + 'px';
  span.style.top = y + 'px';
  span.style.width = random + 'px';
  span.style.height = random + 'px';
  body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 900);
});
