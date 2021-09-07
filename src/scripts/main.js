'use strict';

const header = document.getElementById('header-top');
const menuOpen = document.getElementById('header-menu-open');
const menuClose = document.getElementById('header-menu-close');

const headerClose = () => {
  header.classList.remove('header--open');
};

menuOpen.addEventListener('click', () => {
  header.classList.add('header--open');
});

menuClose.addEventListener('click', headerClose);

document.querySelectorAll('.nav__item').forEach(li => {
  li.addEventListener('click', headerClose);
});
