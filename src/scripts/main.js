'use strict';

function clearHash() {
  const uri = window.location.toString();

  if (uri.indexOf('#') > 0) {
    const cleanUri = uri.substring(0, uri.indexOf('#'));

    window.history.replaceState({}, document.title, cleanUri);
  }
}

window.addEventListener('hashchange', () => {
  const menuBox = document.getElementById('menu');

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    menuBox.classList.add('page__menu--open');
  } else {
    menuBox.classList.remove('page__menu--open');
  }
});

window.addEventListener('click', (event) => {
  const menuBox = document.getElementById('menu');

  if (event.target !== menuBox) {
    clearHash();
    document.body.classList.remove('page__body--with-menu');
    menuBox.classList.remove('page__menu--open');
  }
});

const form = document.querySelector('.form');

function handler(event) {
  event.preventDefault();

  form.reset();
}

form.addEventListener('submit', handler);
