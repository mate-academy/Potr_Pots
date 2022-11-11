'use strict';

window.addEventListener('hash', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const width = window.screen.width;

if (width < 768) {
  showSlides(0);
}

const buttons = document.querySelectorAll('.slider__button');

buttons.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    currentSlide(index);
  });
});

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('slider__item');
  const dots = document.getElementsByClassName('slider__button');

  Array.from(slides).forEach(function(item) {
    item.classList.remove('slider__item--active');
  });

  Array.from(dots).forEach(function(item) {
    item.classList.remove('slider__button--active');
  });

  slides[n].className += ' slider__item--active';
  dots[n].className += ' slider__button--active';
}

const spoilers = document.querySelectorAll('.slider__spoiler');

spoilers.forEach((item) => {
  item.addEventListener('click', (event) => {
    item.classList.toggle('slider__spoiler--active');
    item.previousElementSibling.classList.toggle('slider__description--active');
  });
});
