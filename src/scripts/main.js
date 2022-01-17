'use strict';

const materialsButtons = document.querySelectorAll('.materials__button');
const materialsButtonsInfo = document.querySelectorAll('.materials__info');

materialsButtonsInfo.forEach(e => {
  e.classList.add('materials__info--hidden');
});

for (let i = 0; i < materialsButtons.length; i++) {
  materialsButtons[i].addEventListener('click', () => {
    materialsButtons[i].classList.toggle('materials__button--active');
    materialsButtonsInfo[i].classList.toggle('materials__info--hidden');
  });
}

const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
