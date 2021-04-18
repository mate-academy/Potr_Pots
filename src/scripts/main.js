'use strict';

const headerToggleBtn = document.querySelector('.header__menuToggler');
const nav = document.querySelector('.nav');
const menuCloseBtn = document.querySelector('.nav__closeBtn');
const overlay = document.querySelector('.overlay');
const page = document.querySelector('.page');

const shoppingBagModal = document.querySelector('.shoppingBagModal');
const shoppingBagIcon = document.querySelector('.header__cart');
const shoppingBagCloseBtn = document
  .querySelector('.shoppingBagModal__closeBtn');

function navToggle() {
  nav.classList.toggle('nav_active');
  overlay.classList.toggle('overlay_active');
  page.classList.toggle('page_no-scroll');
}

headerToggleBtn.addEventListener('click', navToggle);
overlay.addEventListener('click', navToggle);
menuCloseBtn.addEventListener('click', navToggle);

function shoppingBagToggler() {
  shoppingBagModal.classList.toggle('shoppingBagModal_active');
  overlay.classList.toggle('overlay_active');
}

shoppingBagIcon.addEventListener('click', shoppingBagToggler);
shoppingBagCloseBtn.addEventListener('click', shoppingBagToggler);
