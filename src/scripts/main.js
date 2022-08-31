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
