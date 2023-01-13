'use strict';

const burger = document.querySelector('.header__burger');
const closeNav = document.querySelector('.nav__close ');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  nav.classList.add('active-nav');
  document.body.style.overflowY = 'hidden';
});

closeNav.addEventListener('click', () => {
  nav.classList.remove('active-nav');
  document.body.style.overflowY = 'visible';
});
