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

const slide = document.querySelectorAll('.slide__list');

slide.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    const item = e.target.closest('.slide__list-link');

    item.classList.toggle('slide__list-link--close');

    const description = e.target.nextElementSibling;

    description.classList.toggle('slide__list-description--on');
  });
});
