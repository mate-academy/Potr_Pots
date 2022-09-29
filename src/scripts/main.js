'use strict';

// disable scroll on menu-open -->

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// disable page refresh on form-submit -->

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.js-test');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

// modal windows in materials section open-close -->

// 1 button -->>

const btn1 = document.querySelector('.modal__button--1');
const card1 = document.querySelector('.modal__card--1');

btn1.addEventListener('click', () => {
  card1.classList.toggle('modal__card--visible');
  btn1.classList.toggle('modal__button--pressed');
});

// 2 button -->

const btn2 = document.querySelector('.modal__button--2');
const card2 = document.querySelector('.modal__card--2');

btn2.addEventListener('click', () => {
  card2.classList.toggle('modal__card--visible');
  btn2.classList.toggle('modal__button--pressed');
});

// 3 button -->

const btn3 = document.querySelector('.modal__button--3');
const card3 = document.querySelector('.modal__card--3');

btn3.addEventListener('click', () => {
  card3.classList.toggle('modal__card--visible');
  btn3.classList.toggle('modal__button--pressed');
});

// 4 button -->

const btn4 = document.querySelector('.modal__button--4');
const card4 = document.querySelector('.modal__card--4');

btn4.addEventListener('click', () => {
  card4.classList.toggle('modal__card--visible');
  btn4.classList.toggle('modal__button--pressed');
});

// 5 button -->

const btn5 = document.querySelector('.modal__button--5');
const card5 = document.querySelector('.modal__card--5');

btn5.addEventListener('click', () => {
  card5.classList.toggle('modal__card--visible');
  btn5.classList.toggle('modal__button--pressed');
});

// mobile slider in materials section -->

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
