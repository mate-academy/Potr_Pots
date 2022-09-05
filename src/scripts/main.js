'use strict';

const menuOpenButton = document.querySelector('.header__menu-button');
const menuCloseButton = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

menuOpenButton.addEventListener('click', () => {
  menu.classList.add('menu--open');
  menu.classList.remove('menu--close');
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.add('menu--close');
  menu.classList.remove('menu--open');
});
