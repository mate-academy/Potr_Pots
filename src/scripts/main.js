'use strict';

const pageReload = document.querySelector('#form');

pageReload.addEventListener('submit', (event) => {
  event.preventDefault();
  pageReload.reset();
});
