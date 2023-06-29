'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});

const button1 = document.querySelector('.materials__button--1');

button1.addEventListener('click', () => {
  const element = document.querySelector('.materials__card--1');

  element.classList.toggle('materials__card--active');
  button1.classList.toggle('materials__button--active');
});

const button2 = document.querySelector('.materials__button--2');

button2.addEventListener('click', () => {
  const element = document.querySelector('.materials__card--2');

  element.classList.toggle('materials__card--active');
  button2.classList.toggle('materials__button--active');
});

const button3 = document.querySelector('.materials__button--3');

button3.addEventListener('click', () => {
  const element = document.querySelector('.materials__card--3');

  element.classList.toggle('materials__card--active');
  button3.classList.toggle('materials__button--active');
});

const button4 = document.querySelector('.materials__button--4');

button4.addEventListener('click', () => {
  const element = document.querySelector('.materials__card--4');

  element.classList.toggle('materials__card--active');
  button4.classList.toggle('materials__button--active');
});

const button5 = document.querySelector('.materials__button--5');

button5.addEventListener('click', () => {
  const element = document.querySelector('.materials__card--5');

  element.classList.toggle('materials__card--active');
  button5.classList.toggle('materials__button--active');
});
