'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const buttons = document.querySelectorAll('.slider__button');
const text = document.querySelectorAll('.slider__text');

buttons.forEach(function(btn, index) {
  btn.addEventListener('click', () => {
    const activeText = document.querySelector('.slider__text--is-active');
    const activeButton = document.querySelector('.slider__button--is-active');

    activeText.classList.remove('slider__text--is-active');
    text[index].classList.add('slider__text--is-active');
    activeButton.classList.remove('slider__button--is-active');
    btn.classList.add('slider__button--is-active');
  });
});

const tabletButtons = document.querySelectorAll('.materials__tablet-button');

tabletButtons.forEach(function(btn, index) {
  btn.addEventListener('click', () => {
    const activeText = document.querySelectorAll('.slider__tb');

    activeText[index].classList.toggle('slider__tb--active');
    btn.classList.toggle('materials__tablet-button--active');
  });
});

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });

  document.documentElement.scrollTop = 0;
});
