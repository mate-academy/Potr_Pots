'use strict';
import Flickity from 'flickity';

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page-overflow')
    : document.body.classList.remove('page-overflow');

  return menu;
};

const elem = document.querySelector('.main-carousel');

const flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
});

flkty.on('ready', function() {
  return flkty;
});

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
