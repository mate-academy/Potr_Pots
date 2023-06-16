'use strict';

const slider = document.querySelector('.slider');
const slides = document.querySelector('.slider__slides');
const slidesIndicators = document.querySelectorAll('.slider__indicator');
const materialsImageButtons = document.querySelectorAll('.materials__button');
const materialsSlides = document.querySelectorAll('.materials__slide');
const form = document.querySelector('.message__form');
const menuOpener = document.querySelector('.header__menu-opener');
const menu = document.querySelector('.menu');
const menuCloser = document.querySelector('.menu__cross-wrapper');
const menuLinks = document.querySelectorAll('.menu__link');

let activeSlide = 0;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

const closeMenu = () => {
  menu.classList.remove('menu--show');
  document.body.classList.remove('page__body--with-menu');
};

slider.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
});

slider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
    if (startX > endX) {
      if (activeSlide === 4) {
        return;
      }

      activeSlide++;
    }

    if (startX < endX) {
      if (activeSlide === 0) {
        return;
      }

      activeSlide--;
    }

    slides.style.transform = `
      translateX(-${activeSlide * 20}%)
    `;

    slidesIndicators.forEach((item, index) => {
      if (index === activeSlide) {
        item.classList.add('slider__indicator--active');
      } else {
        item.classList.remove('slider__indicator--active');
      }
    });
  }
});

materialsImageButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();

    materialsImageButtons.forEach(item => {
      if (item === button) {
        button.classList.toggle('materials__button--active');
      } else {
        item.classList.remove('materials__button--active');
      }
    });

    materialsSlides.forEach(slide => {
      if (button.dataset.slideNumber === slide.dataset.slideNumber) {
        slide.classList.toggle('materials__slide--show');
      } else {
        slide.classList.remove('materials__slide--show');
      }
    });
  });
});

document.addEventListener('click', (e) => {
  materialsImageButtons.forEach(button => {
    button.classList.remove('materials__button--active');
  });

  materialsSlides.forEach(slide => {
    slide.classList.remove('materials__slide--show');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

menuOpener.addEventListener('click', () => {
  menu.classList.add('menu--show');
  document.body.classList.add('page__body--with-menu');
});

menuCloser.addEventListener('click', closeMenu);

menuLinks.forEach(item => {
  item.addEventListener('click', closeMenu);
});
