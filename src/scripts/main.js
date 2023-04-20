'use strict';

const form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', handleSubmit);
