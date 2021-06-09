'use strict';

const menuBtn = document.getElementById('header__menu-btn');
const headerClose = document.getElementById('nav');
const menuCloseBtn = document.getElementById('nav__close-btn');

menuBtn.onclick = function(event) {
  headerClose.classList.add('nav--active');
};

menuCloseBtn.onclick = function(event) {
  headerClose.classList.remove('nav--active');
};
