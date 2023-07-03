'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('card-1');

  if (element) {
    this.location.hash = '#card-1';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
