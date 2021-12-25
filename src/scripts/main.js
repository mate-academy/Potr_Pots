'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.contacts__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => {
    elem.value = '';
  });
});
