'use strict';
/* eslint-disable no-unused-vars */

const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
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
      change.target.classList.remove('--active');
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
