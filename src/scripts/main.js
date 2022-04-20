'use strict';

const button = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__burger-menu');
const closeB = document.querySelector('.burger-nav__close');

button.addEventListener('click', function() {
  menu.style.display = 'block';
});

closeB.addEventListener('click', function() {
  menu.style.display = 'none';
});
