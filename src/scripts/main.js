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

function showText(number) {
  const myText = document.querySelector(`.materials__details__text-${number}`);
  const myBotton = document.querySelector(`.materials__details__btn-${number}`);
  const vertical = myBotton.querySelector('.materials__details__btn__vertical');

  myText.classList.toggle('visible');
  myBotton.classList.toggle('visible');
  vertical.classList.toggle('visible');
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  } else {
    menu.classList.remove('active');
    document.documentElement.style.overflow = '';
  }
});
