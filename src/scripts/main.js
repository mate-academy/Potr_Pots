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
const slideDescription = document
  .getElementsByClassName('slide__list-description');
const slideLink = document.getElementsByClassName('slide__list-link');

list.addEventListener('click', event => {
  event.preventDefault();

  const li = event.target.closest('.slide__list');
  const item = event.target.closest('.slide__list-link');

  if (!item || !list.contains(item)) {
    return null;
  }

  const description = event.target.nextElementSibling;
  const liId = li.getAttribute('id')[li.getAttribute('id').length - 1];

  [...slideLink].forEach(link => {
    const linkId = link.href[link.href.length - 1];

    if (Number(linkId) !== Number(liId)) {
      link.classList.remove('slide__list-link--close');
    } else {
      link.classList.add('slide__list-link--close');
    }
  });

  [...slideDescription].forEach(descriptionItem => {
    const descriptionListItem = descriptionItem.closest('.slide__list');
    const value = descriptionListItem.getAttribute('id');
    const descriptionListItemId = value[value.length - 1];

    if (Number(liId) !== Number(descriptionListItemId)) {
      descriptionItem.classList.remove('slide__list-description--open');
    } else {
      descriptionItem.classList.add('slide__list-description--open');
    }
  });

  if (description.classList.contains('slide__list-description--open')) {
    item.classList.remove('slide__list-link--close');
    description.classList.remove('slide__list-description--open');
  } else {
    item.classList.add('slide__list-link--close');
    description.classList.add('slide__list-description--open');
  }
});
