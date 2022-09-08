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

/* Materials buttons */

const materialsBtn1 = document.querySelector('.materials__button--1');

materialsBtn1.addEventListener('click', () => {
  if (materialsBtn1.innerHTML === '-') {
    materialsBtn1.innerHTML = '+';
  } else {
    materialsBtn1.innerHTML = '-';
  }

  materialsBtn1.classList.toggle('materials__button--active');
});

/* Swiper */

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {
  spaceBetween: 100,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'materials__bullet',
    bulletActiveClass: 'materials__bullet--active',
    clickable: true,
  },
});
