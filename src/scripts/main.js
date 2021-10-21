'use strict';

const feature = document.querySelectorAll('.materials__feature');
const label = document.querySelectorAll('.materials__label');

label.forEach(el => el.addEventListener('click', (event) => {
  event.target.nextElementSibling.classList.toggle('materials__feature--open');
  event.target.classList.toggle('materials__label--open');
}));

feature.forEach(el => el.addEventListener('click', (event) => {
  el.classList.toggle('materials__feature--open');

  event.target.previousElementSibling
    .classList.toggle('materials__label--open');
}));
