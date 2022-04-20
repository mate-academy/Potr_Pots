'use strict';

const cirkle1 = document.querySelector('.material__slider-circle-1');
const slider1 = document.querySelector('.material__slider-1');
const cirkle2 = document.querySelector('.material__slider-circle-2');
const slider2 = document.querySelector('.material__slider-2');
const cirkle3 = document.querySelector('.material__slider-circle-3');
const slider3 = document.querySelector('.material__slider-3');
const cirkle4 = document.querySelector('.material__slider-circle-4');
const slider4 = document.querySelector('.material__slider-4');
const cirkle5 = document.querySelector('.material__slider-circle-5');
const slider5 = document.querySelector('.material__slider-5');

cirkle1.addEventListener('click', function() {
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  this.textContent = '-';
  this.style.lineHeight = '43px';
  slider1.style.display = 'block';
  styleCircle(cirkle2);
  slider2.style.display = 'none';
  styleCircle(cirkle3);
  slider3.style.display = 'none';
  styleCircle(cirkle4);
  slider4.style.display = 'none';
  styleCircle(cirkle5);
  slider5.style.display = 'none';
});

cirkle2.addEventListener('click', function() {
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  this.textContent = '-';
  this.style.lineHeight = '43px';
  slider2.style.display = 'block';
  styleCircle(cirkle1);
  slider1.style.display = 'none';
  styleCircle(cirkle3);
  slider3.style.display = 'none';
  styleCircle(cirkle4);
  slider4.style.display = 'none';
  styleCircle(cirkle5);
  slider5.style.display = 'none';
});

cirkle3.addEventListener('click', function() {
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  this.textContent = '-';
  this.style.lineHeight = '43px';
  slider3.style.display = 'block';
  styleCircle(cirkle1);
  slider1.style.display = 'none';
  styleCircle(cirkle2);
  slider2.style.display = 'none';
  styleCircle(cirkle4);
  slider4.style.display = 'none';
  styleCircle(cirkle5);
  slider5.style.display = 'none';
});

cirkle4.addEventListener('click', function() {
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  this.textContent = '-';
  this.style.lineHeight = '43px';
  slider4.style.display = 'block';
  styleCircle(cirkle1);
  slider1.style.display = 'none';
  styleCircle(cirkle2);
  slider2.style.display = 'none';
  styleCircle(cirkle3);
  slider3.style.display = 'none';
  styleCircle(cirkle5);
  slider5.style.display = 'none';
});

cirkle5.addEventListener('click', function() {
  this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  this.textContent = '-';
  this.style.lineHeight = '43px';
  slider5.style.display = 'block';
  styleCircle(cirkle1);
  slider1.style.display = 'none';
  styleCircle(cirkle2);
  slider2.style.display = 'none';
  styleCircle(cirkle3);
  slider3.style.display = 'none';
  styleCircle(cirkle4);
  slider4.style.display = 'none';
});

function styleCircle(params) {
  params.style.backgroundColor = '#eb5757';
  params.textContent = '+';
  params.style.lineHeight = '';
}

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
