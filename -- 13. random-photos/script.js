'use strict';

const btn = document.querySelector('.btn');
const container = document.querySelector('.image-container');

btn.addEventListener('click', e => {
  loadImages();
});

function loadImages() {
  for (let i = 0; i < 100; i++) {
    const random = Math.floor(Math.random() * 100);
    const img = document.createElement('img');
    img.src = `https://picsum.photos/300?random=${random}`;
    container.insertAdjacentElement('beforeend', img);
  }
}
