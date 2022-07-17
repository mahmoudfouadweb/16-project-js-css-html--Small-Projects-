'use strict';

const img = document.querySelector('.bg-image');

window.addEventListener('scroll', () => {
  updateUi();
});

function updateUi() {
  let pos = scrollY / 928;
  img.style.opacity = 1 - pos;
  img.style.backgroundSize = 160 - window.scrollY / 14 + '%';
  console.log(scrollY);
}
