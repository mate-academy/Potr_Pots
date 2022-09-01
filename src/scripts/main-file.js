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
    const actBtn = document.querySelector('.materials__tablet-button--active');
    const activeText = document.querySelector('.slider__text--is-active');
    const slidersText = document.querySelector('.materials__slider');

    if (index === 4) {
      slidersText.style.bottom = '-2%';
      slidersText.style.left = '54%';
    } else if (index === 3) {
      slidersText.style.bottom = '24%';
      slidersText.style.left = '40%';
    } else if (index === 2) {
      slidersText.style.bottom = '12%';
      slidersText.style.left = '26%';
    } else if (index === 1) {
      slidersText.style.bottom = '40%';
      slidersText.style.left = '14%';
    } else if (index === 0) {
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
