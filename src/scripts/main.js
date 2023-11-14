'use strict';

const formClick = document.getElementById('questions-form');

formClick.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  formClick.reset();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__header--with-menu');
  } else {
    document.body.classList.remove('page__header--with-menu');
  }
});
