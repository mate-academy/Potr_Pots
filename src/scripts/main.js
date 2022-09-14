'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

form.onsubmit = function() {
  form.reset();

  return false;
};

const advantage1 = document.querySelector('.materials__advantage--1');

const showMore = document.getElementById('show-more');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#show') {
    advantage1.classList.add('materials__advantage--hidden');
    showMore.classList.add('materials__highlight-more--hide');
  } else {
    advantage1.classList.remove('materials__advantage--hidden');
    showMore.classList.remove('materials__highlight-more--hide');
  }
});
