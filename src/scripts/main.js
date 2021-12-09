'use strict';

const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.contacts__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => {
    elem.value = '';
  });
});
