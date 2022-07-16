'use strict';

// DOM variables
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const modal = document.querySelector('.pop-up--modal');
const modalBtn = document.querySelector('.modal-btn');
const inputEmail = document.querySelector('.input');

icon.addEventListener('click', () => {
  modal.style.opacity = 0;
  container.classList.remove('active');
});

btn.addEventListener('click', e => {
  e.preventDefault();
});
