'use strict';

// DOM variables
const container = document.querySelector('.image-container');
const imgs = document.querySelectorAll('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 1;
let timeout;

console.log(imgs.length);
next.addEventListener('click', () => {
  current++;
  clearTimeout(timeout);
  updateImg();
  console.log(current);
});
prev.addEventListener('click', () => {
  current--;
  clearTimeout(timeout);
  updateImg();
  console.log(current);
});
updateImg();

function updateImg() {
  if (current > imgs.length) {
    current = 1;
  } else if (current < 1) {
    current = imgs.length;
  }
  const calc = (current - 1) * 500;
  container.style.transform = `translateX(-${calc}px)`;
  timeout = setTimeout(() => {
    current++;
    updateImg();
  }, 2000);
}

/*
const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imageContainerEl = document.querySelector(".image-container");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

*/
