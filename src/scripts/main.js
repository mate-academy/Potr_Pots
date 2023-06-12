'use strict';
/* global Swiper */
/* global AOS */

// menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// swiper
const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

// form-reload
const form = document.getElementById('form-reload');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

// import modules
AOS.init();
swiper.enable();
