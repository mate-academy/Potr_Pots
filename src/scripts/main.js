/* eslint-disable max-len */
'use strict';

const menu = document.querySelector('#menu');
const menuOpener = document.querySelector('#menu-opener');
const menuCloser = document.querySelector('#menu-closer');

menuOpener.addEventListener('click', () => {
  menu.classList.add('header__menu--opened');
});

menuCloser.addEventListener('click', () => {
  menu.classList.remove('header__menu--opened');
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('header__menu--opened');
  });
});

const paragraphs = {
  0: ' We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ',
  1: '  Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit.',
  2: '  Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology.',
  3: '  POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.',
  4: 'POTR Pots are constructed using recycled polypropylene which can be fully recycled.',
};

const swiperSlides = document.querySelectorAll('.swiper-slide');

for (let i = 0; i < swiperSlides.length; i++) {
  const paragraph = swiperSlides[i].querySelector('.swiper-text');

  paragraph.textContent = paragraphs[i] ? paragraphs[i] : paragraph.textContent;
}

const buttons = document.querySelectorAll('.materials__button');

for (const btn of buttons) {
  btn.textContent = '+';

  btn.addEventListener('click', () => {
    btn.classList.toggle('materials__button--active');
    btn.textContent = btn.textContent === '+' ? '—' : '+';

    for (const button of buttons) {
      if (button !== btn) {
        button.classList.remove('materials__button--active');
        button.textContent = '+';
      }
    }
  });
}

const tabletSlides = document.querySelectorAll('.swiper-slide--tablet');

for (let i = tabletSlides.length - 1; i >= 0; i--) {
  const paragraph = tabletSlides[i].querySelector('.swiper-text');

  paragraph.textContent = paragraphs[tabletSlides.length - i - 1];
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    tabletSlides[i].classList.toggle('swiper-slide--active');

    for (const slide of tabletSlides) {
      if (slide !== tabletSlides[i]) {
        slide.classList.remove('swiper-slide--active');
      }
    }
  });
}

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return false;
});
