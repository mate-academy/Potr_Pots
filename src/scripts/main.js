'use strict';

const page = document.querySelector('.page');
const card = page.querySelectorAll('.card');
const buttons = page.querySelectorAll('.materials__button');
const tabs = page.querySelectorAll('.tabs');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {

    if (buttons[i].classList.contains('materials__button--active')) {
      buttons[i].classList.remove('materials__button--active');
      card[i].classList.remove('card--active');
    } else {

      if (page.querySelector('.materials__button--active')) {
        page.querySelector('.materials__button--active').classList.toggle('materials__button--active');
        page.querySelector('.card--active').classList.toggle('card--active');
      }

      buttons[i].classList.toggle('materials__button--active');
      card[i].classList.toggle('card--active');
    }
  });
}

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
});
