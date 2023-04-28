'use strict';
/* global Swiper */

const swiper = new Swiper('.materials__swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

swiper.enable();
