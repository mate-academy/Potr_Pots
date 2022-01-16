'use strict';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuClose = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});

const menuItems = document.querySelectorAll('.menu__link');

for (const item of menuItems) {
  item.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
  });
}
