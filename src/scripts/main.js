'use strict';

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
    const actBtn = document.querySelector('.materials__tablet-button--active');
    const activeText = document.querySelector('.slider__text--is-active');
    const slidersText = document.querySelector('.materials__slider');

    if (index === 0) {
      slidersText.style.bottom = '7%';
      slidersText.style.left = '55%';
    } else if (index === 1) {
      slidersText.style.bottom = '25%';
      slidersText.style.left = '42%';
    } else if (index === 2) {
      slidersText.style.bottom = '10%';
      slidersText.style.left = '28%';
    } else if (index === 3) {
      slidersText.style.bottom = '40%';
      slidersText.style.left = '20%';
    } else if (index === 4) {
      slidersText.style.bottom = '15%';
      slidersText.style.left = '5%';
    }

    activeText.classList.remove('slider__text--is-active');
    text[index].classList.add('slider__text--is-active');
    actBtn.classList.remove('materials__tablet-button--active');
    actBtn.innerHTML = '+';
    btn.innerHTML = '-';
    btn.classList.add('materials__tablet-button--active');
  });
});

const form = document.querySelector('.message-us__form');
const inputs = document.querySelectorAll('.message-us__form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
