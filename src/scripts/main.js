'use strict';
/* eslint-disable no-unused-vars */

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
});

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
