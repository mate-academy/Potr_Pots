'use strict';

/* scroll disable */
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* disable send form */
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

/* slider */
document.querySelector('.slider')
  .addEventListener('touchstart', handleTouchStart, false);

document.querySelector('.slider')
  .addEventListener('touchmove', handleTouchMove, false);

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

let x1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  x1 = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!x1) {
    return false;
  }

  const x2 = event.touches[0].clientX;
  const xDiff = x2 - x1;

  if (xDiff > 0) {
    offset -= 302;

    if (offset < 0) {
      offset = 1208;
    }

    sliderLine.style.left = -offset + 'px';
  } else {
    offset += 302;

    if (offset > 1208) {
      offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
  }

  x1 = null;
};
