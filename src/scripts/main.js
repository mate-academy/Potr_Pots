'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-menu') {
    document.body.classList.add('body__lock');
  } else {
    document.body.classList.remove('body__lock');
  }
});

/* let initialTouchX;

document.getElementById('slider').addEventListener('touchstart', (e) => {
  initialTouchX = e.touches[0].clientX;
});

document.getElementById('slider').addEventListener('touchmove', (e) => {
  const currentTouchX = e.touches[0].clientX;

  const slider = document.getElementById('slider');
  const scrollLeft = slider.scrollLeft;

  // Jeśli palce przesuwają się w lewo i scrollLeft wynosi 0, przewiń w lewo
  if (currentTouchX > initialTouchX && scrollLeft === 0) {
    e.preventDefault();
    slider.scrollLeft = 1;
  }

  if (currentTouchX < initialTouchX && scrollLeft
    + slider.clientWidth === slider.scrollWidth) {
    e.preventDefault();
    slider.scrollLeft = scrollLeft - 1;
  }
}); */

/* function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});
 */
