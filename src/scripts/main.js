'use strict';

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

function handleFromSubmit(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}
form.addEventListener('submit', handleFromSubmit);

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(onEntry);
const names = document.querySelectorAll('.animation');

for (const elm of names) {
  observer.observe(elm);
}
