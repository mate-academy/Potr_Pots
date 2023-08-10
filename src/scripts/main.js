'use strict';
/* global Swiper */

const materialsItems = document.querySelectorAll('.materials__item');

materialsItems.forEach((item) => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('.materials__btn');
    const descr = item.querySelector('.materials__paragraph');
    const activeItem = document.querySelector('.materials__item--active');

    if (activeItem && activeItem !== item) {
      activeItem.classList.remove('materials__item--active');

      const activeBtn = activeItem.querySelector('.materials__btn');

      activeBtn.textContent = '+';
      activeBtn.style.backgroundColor = '#EB5757';

      const activeDescr = activeItem.querySelector('.materials__paragraph');

      activeDescr.style.opacity = '0';
    }

    if (item.classList.contains('materials__item--active')) {
      item.classList.remove('materials__item--active');
      btn.textContent = '+';
      btn.style.backgroundColor = '#EB5757';
      descr.style.opacity = '0';
    } else {
      item.classList.add('materials__item--active');
      btn.textContent = '-';
      btn.style.backgroundColor = '#00000069';
      descr.style.opacity = '1';
    }
  });
});

const materialsSlider = new Swiper('.materials__slider', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});

materialsSlider.enable();

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
