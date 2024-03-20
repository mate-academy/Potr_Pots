'use strict';
import Swiper from 'swiper';

import { Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  loop: true,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const buttons = document.querySelectorAll('.materials__button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleCaption(index)
  })
});

function toggleCaption(index) {
  const caption = document.querySelector(`.materials__card--${index + 1}`);
  const currentButton = document.querySelector(`.materials__button--${index + 1}`);

  const isContains = caption.classList.contains('materials__card--visible');
  hideAllCaptions();

  if (!isContains) {
    caption.classList.add('materials__card--visible');
    currentButton.classList.add('materials__button--active');
  }
}

function hideAllCaptions() {
  const captions = document.querySelectorAll('.materials__card');
  const buttons = document.querySelectorAll('.materials__button');

  captions.forEach((caption, index) => {
    caption.classList.remove('materials__card--visible');
  });

  buttons.forEach((caption, index) => {
    caption.classList.remove('materials__button--active');
  });

}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
})
