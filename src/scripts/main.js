'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide-menu') {
    document.body.classList.add('body__lock');
  } else {
    document.body.classList.remove('body__lock');
  }
});

/* document.addEventListener('DOMContentLoaded', function() {
  var circles = document.querySelectorAll('.materials__circle');

  circles.forEach(function(circle) {
    circle.addEventListener('click', function() {
      var card = this.nextElementSibling;
      var currentOpacity = parseFloat(getComputedStyle(card).opacity);

      // Toggle pomiędzy 0 i 1
      card.style.opacity = currentOpacity === 0 ? '1' : '0';
    });

    circle.addEventListener('mouseout', function() {
      var card = this.nextElementSibling;

      // Po zabraniu myszki ustaw opacity na 0
      card.style.opacity = '0';
    });
  });
}); */

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
