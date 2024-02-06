'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-menu') {
    document.body.classList.add('body__lock');
  } else {
    document.body.classList.remove('body__lock');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.materials__circle');

  circles.forEach(function(circle) {
    const card = circle.nextElementSibling;

    circle.addEventListener('click', function() {
      if (card.classList.contains('materials__card--clicked')) {
        card.classList.remove('materials__card--clicked');
        circle.classList.remove('materials__circle--clicked');
      } else {
        card.classList.add('materials__card--clicked');
        circle.classList.add('materials__circle--clicked');
      }
    });
  });
});

function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});

var swiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Add more options as needed
});
