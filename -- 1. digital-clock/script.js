'use strict';
let h = document.querySelector('.h'),
  min = document.querySelector('.min'),
  s = document.querySelector('.s'),
  ampm = document.querySelector('.ampm');

function updateTime() {
  let hours = new Date().getHours(),
    minute = new Date().getMinutes(),
    second = new Date().getSeconds();
  h.textContent = hours;
  min.textContent = minute;
  s.textContent = second;
  let amPm = 'AM';
  if (hours > 12) {
    hours -= 12;
    amPm = 'PM';
  } else {
    amPm = 'AM';
  }
  ampm.textContent = amPm;
}
// console.log(hours, minute, second);
document.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    updateTime();
  }, 1000);
});
