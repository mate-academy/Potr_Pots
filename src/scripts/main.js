'use strict';

const button = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__burger-menu');
const closeB = document.querySelector('.burger-nav__close');

button.addEventListener('click', function() {
  menu.style.transform = 'translateX(0)';
});

closeB.addEventListener('click', function() {
  menu.style.transform = 'translateX(75vw)';
});
