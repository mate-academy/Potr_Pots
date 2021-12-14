'use strict';

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
