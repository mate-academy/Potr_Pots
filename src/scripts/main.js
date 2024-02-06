'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.header__open-button');
  const closeButton = document.querySelector('.nav__close-button');
  const menu = document.querySelector('.nav');

  menuButton.addEventListener('click', function() {
    menu.classList.add('is-open');
  });

  closeButton.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });

  menu.addEventListener('click', function() {
    menu.classList.remove('is-open');
  });
});
