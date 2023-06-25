'use strict';

// Slider
const openers = document.querySelectorAll('.modals__opener');
const sliderpages = document.querySelectorAll('.slider__page');
const controls = document.getElementById('mtrls-n-ftrs--controls');
const slider = document.querySelector('.slider');

const moveImage = (to, action = 0) => {
  let from;
  const classList = controls.classList;

  for (let i = 0; i < classList.length; i++) {
    from = classList[i].match(/(?<=--selected-)./g);

    if (from) {
      break;
    }
  }

  const To = to === -1 ? Number.parseInt(from) : to;

  if (from) {
    controls.classList.remove('modals--selected-' + from);
    controls.classList.remove('slider--selected-' + from);
  }

  if (!from || to !== Number.parseInt(from)) {
    controls.classList.add('slider--selected-' + (To + action));
    controls.classList.add('modals--selected-' + (To + action));
  }
};

for (let i = 0; i < openers.length; i++) {
  openers[i].addEventListener('click', (e) => {
    moveImage(i + 1);
  });

  sliderpages[i].addEventListener('click', (e) => {
    moveImage(i + 1);
  });
}

slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);

// Touch event handlers
let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches // browser API
    || evt.originalEvent.touches; // jQuery
};

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = evt.touches[0].clientX;
  const yUp = evt.touches[0].clientY;
  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) { // most significant
    if (xDiff > 0) {
      moveImage(-1, 1);
    } else {
      moveImage(-1, -1);
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
};
