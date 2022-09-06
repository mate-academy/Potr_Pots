'use strict';

const menuOpenButton = document.querySelector('.header__menu-button');
const menuCloseButton = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
let isMenuOpen = false;

menuOpenButton.addEventListener('click', () => {
  menu.classList.remove('menu--close');
  isMenuOpen = true;
});

menuCloseButton.addEventListener('click', () => {
  menu.classList.add('menu--close');
  isMenuOpen = false;
});

if (!isMenuOpen) {
  menuList.addEventListener('click', () => {
    menu.classList.add('menu--close');
    isMenuOpen = false;
  });
}
