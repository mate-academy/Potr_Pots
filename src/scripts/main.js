'use strict';

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
});
