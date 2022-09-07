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

const onTabletAndDesktop = window.matchMedia('(min-width: 640px)');
const materialsContainer = document.querySelector('.materials__container');

if (onTabletAndDesktop.matches) {
  materialsContainer.classList.remove('swiper');
}

/* Swiper */

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {
  spaceBetween: 100,

  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'materials__bullet',
    bulletActiveClass: 'materials__bullet--active',
    clickable: true,
  },
});
