'use strict';

/* global Swiper */

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-menu') {
    document.body.classList.add('body__lock');
  } else {
    document.body.classList.remove('body__lock');
  }
});

// assign class when button clicked
document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.materials__circle');

  circles.forEach(function(circle) {
    const card = circle.nextElementSibling;

    circle.addEventListener('click', function() {
      if (card.classList.contains('clicked')) {
        card.classList.remove('clicked');
        circle.classList.remove('materials__circle--clicked');
      } else {
        card.classList.add('clicked');
        circle.classList.add('materials__circle--clicked');
      }
    });
  });
});

// clear form
function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});

// reset swiper
function handleResize() {
  window.location.reload();
}

window.addEventListener('resize', handleResize);
