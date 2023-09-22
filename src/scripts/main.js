'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
}); */

const materialsFeature = document.querySelectorAll('.materials__feature');

materialsFeature.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('materials__feature--active');
    el.children[0].classList.toggle('materials__feature-box--active');
  });
});
