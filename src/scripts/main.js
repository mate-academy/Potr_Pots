'use strict';

const form = document.querySelector('.feedback__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.feedback__input');

  for (const input of inputs) {
    input.value = '';
  }
});
