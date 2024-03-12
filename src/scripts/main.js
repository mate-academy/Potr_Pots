'use strict';
/* eslint-disable */
$(document).ready(function() {
  $('.materials__swiper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
  });
});

const menu = document.querySelector('.menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  } else {
    menu.classList.remove('active');
    document.documentElement.style.overflow = '';
  }
});
