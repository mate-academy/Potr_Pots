'use strict';

const button = document.querySelector('.burger-button');

const menu = document.querySelector('.header__nav');
const menuClasses = menu.classList;

const headerCloseButton = document.querySelector('.header__close-button');

headerCloseButton.addEventListener('click', () => {
  menuClasses.toggle('active');
});

button.addEventListener('click', () => {
  menuClasses.toggle('active');
});

const sliderNav = document.querySelectorAll('.slider__navlink');

window.addEventListener('hashchange', () => {
  switch (window.location.hash) {
    case '#slides__1':
      sliderNav.forEach((e) => e.classList.remove('slider__active'));
      sliderNav[0].classList.add('slider__active');
      break;
    case '#slides__2':
      sliderNav.forEach((e) => e.classList.remove('slider__active'));
      sliderNav[1].classList.add('slider__active');
      break;
    case '#slides__3':
      sliderNav.forEach((e) => e.classList.remove('slider__active'));
      sliderNav[2].classList.add('slider__active');
      break;
    case '#slides__4':
      sliderNav.forEach((e) => e.classList.remove('slider__active'));
      sliderNav[3].classList.add('slider__active');
      break;
    case '#slides__5':
      sliderNav.forEach((e) => e.classList.remove('slider__active'));
      sliderNav[4].classList.add('slider__active');
      break;
  }

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const sliderButton = document.querySelectorAll('.slider__button');
const sliderSlide = document.querySelectorAll('.slider__slide');

sliderButton.forEach((a, i) => {
  a.addEventListener('click', () => {
    sliderButton.forEach((e, index) =>
      i === index
        ? e.classList.toggle('button--active')
        : e
    );
    sliderSlide[i].classList.toggle('slider__active');
  });
});
