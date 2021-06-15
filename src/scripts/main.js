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

const form = document.querySelector('.contacnt-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.form-input');

  for (const input of inputs) {
    input.value = '';
  }
});
