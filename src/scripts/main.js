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

/* Media queries */

const discountBtn = document.querySelector('.discount__button');

function myFunction(media) {
  if (media.matches) {
    discountBtn.classList.remove('button--primary-yellow');
    discountBtn.classList.add('button--secondary-blue');
  }
}

const onTablet = window.matchMedia('(min-width: 640px)');

myFunction(onTablet);

/* Form settings */

const form = document.querySelector('.message-us__form');
const inputs = document.querySelectorAll('.message-us__input');

form.addEventListener('submit', event => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
