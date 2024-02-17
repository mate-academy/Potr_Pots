'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const circleOne = document.querySelector('.materials__item--1');
const hiddenDivOne = document.querySelector('.materials__text-content--1');
const circleHoverOne = document.querySelector('.materials__circle--1');

const circleTwo = document.querySelector('.materials__item--2');
const hiddenDivTwo = document.querySelector('.materials__text-content--2');
const circleHoverTwo = document.querySelector('.materials__circle--2');

const circleThree = document.querySelector('.materials__item--3');
const hiddenDivThree = document.querySelector('.materials__text-content--3');
const circleHoverThree = document.querySelector('.materials__circle--3');

const circleFour = document.querySelector('.materials__item--4');
const hiddenDivFour = document.querySelector('.materials__text-content--4');
const circleHoverFour = document.querySelector('.materials__circle--4');

const circleFive = document.querySelector('.materials__item--5');
const hiddenDivFive = document.querySelector('.materials__text-content--5');
const circleHoverFive = document.querySelector('.materials__circle--5');

circleOne.addEventListener('click', () => {
  hiddenDivOne.classList.toggle('display');
  circleHoverOne.classList.toggle('circle-hover');
});

circleTwo.addEventListener('click', () => {
  hiddenDivTwo.classList.toggle('display');
  circleHoverTwo.classList.toggle('circle-hover');
});

circleThree.addEventListener('click', () => {
  hiddenDivThree.classList.toggle('display');
  circleHoverThree.classList.toggle('circle-hover');
});

circleFour.addEventListener('click', () => {
  hiddenDivFour.classList.toggle('display');
  circleHoverFour.classList.toggle('circle-hover');
});

circleFive.addEventListener('click', () => {
  hiddenDivFive.classList.toggle('display');
  circleHoverFive.classList.toggle('circle-hover');
});
