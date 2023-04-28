'use strict';
/* global Swiper */

const swiper = new Swiper('.materials__swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

swiper.enable();
