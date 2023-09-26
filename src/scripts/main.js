'use strict';
/* eslint-disable no-unused-vars */

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const body = document.querySelector('body');
const closeMenu = document.querySelectorAll('.menu-close');

if (closeMenu.length > 0) {
  for (let index = 0; index < closeMenu.length; index++) {
    const closeMenuButton = closeMenu[index];

    closeMenuButton.addEventListener('click', function(e) {
      body.classList.remove('lock');
      nav.classList.remove('nav--active');
    });
  }
}

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  body.classList.add('lock');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('nav--active');
});

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('--active');
    } else {
    // change.target.classList.remove('--active');
    }
  });
}

const options = { threshold: [0.01] };
// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.animation-item');

for (const elm of elements) {
  observer.observe(elm);
}

const formSubmit = document.getElementById('form');

formSubmit.addEventListener('submit', (e) => {
  document.getElementById('form').reset();
  document.getElementById('form-submit').innerHTML = 'Sended!';
  e.preventDefault();
});
