'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

// const slideLink = document.querySelector('.slide__list-link');

// slideLink.addEventListener('click', function(event) {
//   event.preventDefault();
// });

const slideLink = document.querySelectorAll('.slide__list-link');

slideLink.forEach(el => {
  el.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
