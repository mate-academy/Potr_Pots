'use strict';
import Flickity from 'flickity';

// disable scrolling when the menu is open
window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu');

  if (menu) {
    document.body.classList.add('overflow');
    document.documentElement.classList.add('overflow');
  } else {
    document.body.classList.remove('overflow');
    document.documentElement.classList.remove('overflow');
  }

  return menu;
};

// ? document.body.classList.add('page-overflow')
//     : document.body.classList.remove('page-overflow');

const elem = document.querySelector('.main-carousel');

const flkty = new Flickity(elem, {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
});

flkty.on('ready', function() {
  return flkty;
});

// display of a hint text when clicking on a circle
const circle = document.querySelectorAll('.materials__circle');
const circleText = document.querySelectorAll('.materials__circle-text');
const circleGrpop = document.querySelectorAll('.materials__circle-group');

const disabledCircle = () => {
  for (let i = 0; i < circle.length; i++) {
    circleText[i].classList.remove('materials__circle-text--visible');
    circle[i].classList.remove('materials__circle--active');
    circleGrpop[i].classList.remove('materials__circle-group--z-index');
  }
};

for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('click', () => {
    if (circleGrpop[i].classList.contains('materials__circle-group--z-index')) {
      disabledCircle();
    } else {
      disabledCircle();
      circleText[i].classList.add('materials__circle-text--visible');
      circle[i].classList.add('materials__circle--active');
      circleGrpop[i].classList.add('materials__circle-group--z-index');
    }
  });
}

// changing the button when the window size changes
const reisizeWindow = () => {
  const wigth = window.innerWidth;
  const button = document.querySelector('.advantages__button');

  if (wigth > 767) {
    button.classList.remove('button--2');
    button.classList.add('button--3');
  } else {
    button.classList.remove('button--3');
    button.classList.add('button--2');
  }
};

reisizeWindow();

window.addEventListener('resize', reisizeWindow);
