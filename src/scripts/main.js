'use strict';
/* global Swiper */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

swiper.enable();
