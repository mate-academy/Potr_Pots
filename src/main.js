'use strict';

const cirkle1 = document.querySelector('.material__slider-circle-1');
const cirkle11 = document.querySelector('.material__slider-circle-11');
const slider1 = document.querySelector('.material__slider-1');
const cirkle2 = document.querySelector('.material__slider-circle-2');
const cirkle22 = document.querySelector('.material__slider-circle-22');
const slider2 = document.querySelector('.material__slider-2');
const cirkle3 = document.querySelector('.material__slider-circle-3');
const cirkle33 = document.querySelector('.material__slider-circle-33');
const slider3 = document.querySelector('.material__slider-3');
const cirkle4 = document.querySelector('.material__slider-circle-4');
const cirkle44 = document.querySelector('.material__slider-circle-44');
const slider4 = document.querySelector('.material__slider-4');
const cirkle5 = document.querySelector('.material__slider-circle-5');
const cirkle55 = document.querySelector('.material__slider-circle-55');
const slider5 = document.querySelector('.material__slider-5');

cirkle1.addEventListener('click', function() {
  this.style.display = 'none';
  slider1.style.display = 'block';
  cirkle11.style.display = 'block';
  cirkle22.style.display = 'none';
  cirkle33.style.display = 'none';
  cirkle44.style.display = 'none';
  cirkle55.style.display = 'none';
  slider2.style.display = 'none';
  slider3.style.display = 'none';
  slider4.style.display = 'none';
  slider5.style.display = 'none';
  cirkle2.style.display = 'block';
  cirkle3.style.display = 'block';
  cirkle4.style.display = 'block';
  cirkle5.style.display = 'block';
});

cirkle11.addEventListener('click', function() {
  this.style.display = 'none';
  slider1.style.display = 'none';
  cirkle1.style.display = 'block';
});

cirkle2.addEventListener('click', function() {
  this.style.display = 'none';
  slider2.style.display = 'block';
  cirkle22.style.display = 'block';
  cirkle11.style.display = 'none';
  cirkle33.style.display = 'none';
  cirkle44.style.display = 'none';
  cirkle55.style.display = 'none';
  slider1.style.display = 'none';
  slider3.style.display = 'none';
  slider4.style.display = 'none';
  slider5.style.display = 'none';
  cirkle1.style.display = 'block';
  cirkle3.style.display = 'block';
  cirkle4.style.display = 'block';
  cirkle5.style.display = 'block';
});

cirkle22.addEventListener('click', function() {
  this.style.display = 'none';
  slider2.style.display = 'none';
  cirkle2.style.display = 'block';
});

cirkle3.addEventListener('click', function() {
  this.style.display = 'none';
  slider3.style.display = 'block';
  cirkle33.style.display = 'block';
  cirkle11.style.display = 'none';
  cirkle22.style.display = 'none';
  cirkle44.style.display = 'none';
  cirkle55.style.display = 'none';
  slider1.style.display = 'none';
  slider2.style.display = 'none';
  slider4.style.display = 'none';
  slider5.style.display = 'none';
  cirkle1.style.display = 'block';
  cirkle2.style.display = 'block';
  cirkle4.style.display = 'block';
  cirkle5.style.display = 'block';
});

cirkle33.addEventListener('click', function() {
  this.style.display = 'none';
  slider3.style.display = 'none';
  cirkle3.style.display = 'block';
});

cirkle4.addEventListener('click', function() {
  this.style.display = 'none';
  slider4.style.display = 'block';
  cirkle44.style.display = 'block';
  cirkle11.style.display = 'none';
  cirkle33.style.display = 'none';
  cirkle22.style.display = 'none';
  cirkle55.style.display = 'none';
  slider1.style.display = 'none';
  slider3.style.display = 'none';
  slider2.style.display = 'none';
  slider5.style.display = 'none';
  cirkle1.style.display = 'block';
  cirkle3.style.display = 'block';
  cirkle2.style.display = 'block';
  cirkle5.style.display = 'block';
});

cirkle44.addEventListener('click', function() {
  this.style.display = 'none';
  slider4.style.display = 'none';
  cirkle4.style.display = 'block';
});

cirkle5.addEventListener('click', function() {
  this.style.display = 'none';
  slider5.style.display = 'block';
  cirkle55.style.display = 'block';
  cirkle11.style.display = 'none';
  cirkle33.style.display = 'none';
  cirkle44.style.display = 'none';
  cirkle22.style.display = 'none';
  slider1.style.display = 'none';
  slider3.style.display = 'none';
  slider4.style.display = 'none';
  slider2.style.display = 'none';
  cirkle1.style.display = 'block';
  cirkle3.style.display = 'block';
  cirkle4.style.display = 'block';
  cirkle2.style.display = 'block';
});

cirkle55.addEventListener('click', function() {
  this.style.display = 'none';
  slider5.style.display = 'none';
  cirkle5.style.display = 'block';
});

const slider11 = createSlider(document.querySelector('#slider1'));

setInterval(function() {
  slider11.moveRight();
}, 3000);

function createSlider(slider) {
  const list = slider.querySelector('.list');
  const dotsContainer = slider.querySelector('.dots');
  const count = list.children.length;
  let position = 0;

  moveTo(0);

  function moveTo(newPosition) {
    position = normalizePozition(newPosition);

    if (dotsContainer) {
      hightlightDot(position);
    }

    list.style.transform = `translateX(${-position * 100}%)`;
  }

  function moveRight() {
    moveTo(position + 1);
  }

  function moveLeft() {
    moveTo(position - 1);
  }

  function normalizePozition(newPosition) {
    let finalPositions = newPosition % count;

    if (finalPositions < 0) {
      finalPositions += count;
    }

    return finalPositions;
  }

  function hightlightDot(newPosition) {
    const activeDot = dotsContainer.querySelector('.dot--active');

    if (activeDot) {
      activeDot.classList.remove('dot--active');
    }

    const selectedDot = dotsContainer.children[newPosition];

    selectedDot.classList.add('dot--active');
  }

  if (dotsContainer) {
    const dots = dotsContainer.children;

    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function() {
        moveTo(i);
      });
    }
  }

  return {
    moveTo,
    moveRight,
    moveLeft,
  };
}
