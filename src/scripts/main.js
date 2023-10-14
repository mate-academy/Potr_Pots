'use strict';

const items = document.querySelectorAll('.materials__item-wr');
const materialsContent = document.querySelector('.materials__content');
const icons = document.querySelectorAll('.materials__icon');

materialsContent.addEventListener('click', handleClick);

function handleClick({ target }) {
  items.forEach(el => {
    el.style.opacity = 0;
  });

  icons.forEach(el => {
    el.classList.remove('materials__icon--active');
  });

  if (target.classList.contains('materials__icon')) {
    target.nextElementSibling.style.opacity = 1;
    target.classList.add('materials__icon--active');
  }
}
