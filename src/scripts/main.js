'use strict';

const burgerBth = document.querySelector('.header__burger-button');
const headerNav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__list');
const closerBth = document.querySelector('.nav__x-close');

burgerBth.addEventListener('click', (e) => {
  headerNav.classList.toggle('nav--active');
  navMenu.classList.toggle('nav__list--active');
});

closerBth.addEventListener('click', (e) => {
  headerNav.classList.toggle('nav--active');
  navMenu.classList.toggle('nav__list--active');
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth > 1025) {
    headerNav.classList.remove('nav--active');
    navMenu.classList.remove('nav__list--active');
  }
});
