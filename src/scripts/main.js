'use strict';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/{{pagination}}.css';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination.min.css';

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 8,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  touch: {
    enabled: true,
  },
  on: {
    slideChange: function() {
      const bullets = document.querySelectorAll('.swiper-pagination-bullet');

      bullets.forEach(function(bullet, bulletIndex) {
        bullet.classList.toggle(
          'swiper-pagination-bullet-active',
          bulletIndex === mySwiper.realIndex,
        );
      });
    },
  },
});

function hideAllHints() {
  const hints = document.querySelectorAll('.materials__toggle-text');
  const buttons = document.querySelectorAll('.materials__toggle-button');

  hints.forEach((element) => {
    element.classList.remove('visible');
  });

  buttons.forEach((button) => {
    button.classList.remove('materials__toggle-button--active');
  });
}

function toggleHints(buttonNumber) {
  const textElement = document.querySelector(`.materials__toggle-text--${buttonNumber}`);
  const buttonElement = document.querySelector(`.materials__toggle-button--${buttonNumber}`);

  if (textElement && buttonElement) {
    const isTextVisible = textElement.classList.contains('visible');

    hideAllHints();

    if (!isTextVisible) {
      textElement.classList.add('visible');
      buttonElement.classList.add('materials__toggle-button--active');
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.materials__toggle-button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      toggleHints(index + 1);
    });
  });
});

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  e.target.reset();
});
