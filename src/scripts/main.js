'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.materials__input');
  const dots = document.querySelectorAll('.materials__dot');
  const slides = document.querySelectorAll('.materials__slide-text');

  let currentIndex = -1;

  function updateState(index) {
    currentIndex = index;

    slides.forEach(function(slide, i) {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });

    dots.forEach(function(dot, i) {
      if (i === index) {
        dot.style.backgroundColor = '';
        dot.textContent = '-';
      } else {
        dot.style.backgroundColor = '#eb5757';
        dot.textContent = '+';
      }
    });
  }

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  inputs.forEach(function(input, index) {
    input.addEventListener('click', function() {
      if (currentIndex === index) {
        updateState(-1);
      } else {
        updateState(index);
      }
    });
  });
});
