'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
