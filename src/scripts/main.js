'use strict';

// Slider
import $ from 'jquery';
import 'slick-carousel';

$('.slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
  speed: 500,
  easing: 'ease',
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 3000,
});

// Materials Popups Buttons

const popupArr = ['one', 'two', 'three', 'four', 'five'];

for (const i of popupArr) {
  const btn = document.querySelector(`.popup__btn--${i}`);
  const popup = document.querySelector(`.popup__inner--${i}`);

  if (btn) {
    btn.addEventListener('click', (event) => {
      event.preventDefault();

      popup.classList.toggle('popup__inner--active');
      btn.classList.toggle('materials__button--close');
    })
  }
}

// Unscroll only for Safari
const body = document.body;
const pageMenu = document.querySelector('.page__menu');
const iconMenu = document.querySelector('.icon--menu');

iconMenu.addEventListener('click', () => {
  body.classList.add('unscroll');
});

pageMenu.addEventListener('click', () => {
  body.classList.remove('unscroll');
});
