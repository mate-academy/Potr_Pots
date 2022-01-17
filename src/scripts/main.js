'use strict';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuClose = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--active');
});

const menuItems = document.querySelectorAll('.menu__link');

for (const item of menuItems) {
  item.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
  });
}

const btns = document.querySelectorAll('.materials__btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    for (const allBtn of btns) {
      if (allBtn !== btns[i]) {
        allBtn.classList.remove('materials__btn--active');
      }
    }

    btns[i].classList.toggle('materials__btn--active');
  });
}
