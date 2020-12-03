'use strict';

const burger = document.querySelector('.nav__burger');
const toggler = document.querySelector('.burger__menu');

const close = document.querySelector('.burger-open__close');

toggler.onclick = function toggleSidebar() {
  burger.classList.toggle('nav__burger--open');
};

close.onclick = function toggleSidebar() {
  burger.classList.toggle('nav__burger--open');
};
