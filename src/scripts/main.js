/* eslint-disable no-undef */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const mySwiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 7,
    pagination: {
      el: '.swiper-pagination',
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
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.materials__toggle-button');

  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      toggleText(index + 1);
    });
  });
});

function toggleText(buttonNumber) {
  const textElement = document.querySelector(`.materials__toggle-text--${buttonNumber}`);
  const buttonElement = document.querySelector(`.materials__toggle-button--${buttonNumber}`);

  if (textElement && buttonElement) {
    const isTextVisible = textElement.classList.contains('visible');

    hideAllText();

    if (!isTextVisible) {
      textElement.classList.add('visible');
      buttonElement.classList.add('materials__toggle-button--active');
    }
  }
}

function hideAllText() {
  const textElements = document.querySelectorAll('.materials__toggle-text');
  const buttons = document.querySelectorAll('.materials__toggle-button');

  textElements.forEach((element) => {
    element.classList.remove('visible');
  });

  buttons.forEach((button) => {
    button.classList.remove('materials__toggle-button--active');
  });
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#burger-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  e.target.reset();
});
