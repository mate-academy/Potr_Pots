'use strict';

const onTabletAndDesktop = window.matchMedia('(min-width: 640px)');
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

/* Materials buttons behaviour */
const materialsButtons = document.querySelectorAll('.materials__button');

let tempI = 0;

materialsButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    // Remove selection on previous slides
    if (i !== tempI) {
      materialsButtons[tempI].classList.remove('materials__button--active');
      tempI = i;
    }

    btn.classList.toggle('materials__button--active');
  });
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

/* Discount button styles */

const discountBtn = document.querySelector('.discount__button');

function switchButtonStyle(media) {
  if (media.matches) {
    discountBtn.classList.remove('button--primary-yellow');
    discountBtn.classList.add('button--secondary-blue');
  }
}

switchButtonStyle(onTabletAndDesktop);

/* Form settings */

const form = document.querySelector('.message-us__form');
const inputs = document.querySelectorAll('.message-us__input');

form.addEventListener('submit', event => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
