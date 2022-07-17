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
  modal.classList.remove('active');
  modal.style.top = '10%';
});

btn.addEventListener('click', e => {
  e.preventDefault();
  modal.style.top = '50%';
  modal.style.opacity = 1;
  modal.classList.add('active');
  container.classList.add('active');
});
