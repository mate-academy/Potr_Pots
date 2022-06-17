'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const form = document.getElementById('form');

form.onsubmit = function() {
  document.getElementById('form').reset();

  return false;
};

const cardTogglers = document.querySelectorAll('.card__toggle');

for (const toggler of cardTogglers) {
  toggler.addEventListener('change', function() {
    if (toggler.closest('.materials__card').classList.contains("materials__card--is-active")) {
      toggler.closest('.materials__card').classList.remove('materials__card--is-active');
    } else {
      toggler.closest('.materials__card').classList.add('materials__card--is-active');
    }
  });
}
