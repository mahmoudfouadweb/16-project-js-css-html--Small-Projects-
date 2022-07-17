'use strict';

// DOM variables

const cards = document.querySelector('.drum-box');
const crash = document.querySelector('.crash');
const kick = document.querySelector('.kick');
const snare = document.querySelector('.snare');
const tom = document.querySelector('.tom');

// function

const container = ['crash', 'kick', 'snare', 'tom'];

container.forEach(card => {
  const newDiv = document.createElement('div');
  const newAudio = document.createElement('audio');
  newAudio.src = 'sounds/' + card + '.mp3';
  newDiv.appendChild(newAudio);
  newDiv.classList.add('drum-card', card);
  newDiv.textContent = card;
  cards.appendChild(newDiv);
  newDiv.addEventListener('click', () => {
    newAudio.play();
  });
});

// crash
// kick
// snare
// tom

container.forEach(card => {
  window.addEventListener('keydown', e => {
    console.log(e.key);
    if (e.key == card.slice(0, 1)) {
      newAudio.play();
    }
  });
});
