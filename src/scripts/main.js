'use strict';
/* global Swiper */

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const slider = document.getElementByClassName('materials__swiper');

if (slider !== null) {
  const swiper = new Swiper('.materials__swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  swiper.enable();
}

const form = document.getElementById('form');

if (form !== null) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.reset();
  });
}
