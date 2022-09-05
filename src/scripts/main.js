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
    menuBox.classList.add('page__menu--open');
    menuBox.classList.remove('page__menu--close');
  } else {
    menuBox.classList.add('page__menu--close');
    menuBox.classList.remove('page__menu--open');
  }
});

window.addEventListener('mouseup', (event) => {
  const menuBox = document.getElementById('menu');

  if (event.target === menuBox) {
    menuBox.classList.add('page__menu--open');
    menuBox.classList.remove('page__menu--close');
  } else {
    clearHash();
    menuBox.classList.add('page__menu--close');
    menuBox.classList.remove('page__menu--open');
  }
});
