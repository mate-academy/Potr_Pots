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

// popup

// const slide = document.querySelectorAll('.slide__list');

// slide.forEach(element => {
//   element.addEventListener('click', (e) => {
//     e.preventDefault();

//     const item = e.target.closest('.slide__list-link');

//     item.classList.toggle('slide__list-link--close');

//     const description = e.target.nextElementSibling;

//     description.classList.toggle('slide__list-description--open');
//   });
// });

const list = document.querySelector('.materials__slide');
// eslint-disable-next-line max-len
const slideDescription = document.getElementsByClassName('slide__list-description');
const slideLink = document.getElementsByClassName('slide__list-link');
// let switchOver;

list.addEventListener('click', event => {
  event.preventDefault();

  const item = event.target.closest('.slide__list-link');

  if (!item || !list.contains(item)) {
    return null;
  }

  const description = event.target.nextElementSibling;

  // if (switchOver) {
  // eslint-disable-next-line max-len
  [...slideLink].forEach(link => link.classList.remove('slide__list-link--close'));
  // eslint-disable-next-line max-len
  [...slideDescription].forEach(descriptionItem => descriptionItem.classList.remove('slide__list-description--open'));
  // switchOver = false;
  // }

  if (description.classList.contains('slide__list-description--open')) {
    item.classList.remove('slide__list-link--close');
    description.classList.remove('slide__list-description--open');
  } else {
    item.classList.add('slide__list-link--close');
    description.classList.add('slide__list-description--open');
  }

  // item.classList.toggle('slide__list-link--close');
  // description.classList.toggle('slide__list-description--open');

  // switchOver = true;
});
