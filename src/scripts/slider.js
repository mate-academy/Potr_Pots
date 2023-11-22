'use strict';

const slider = document.querySelector('.materials__slider');
const slides = Array.from(document
  .querySelectorAll('.materials__popup'));

slides.reverse();

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;
let isSliderActivated = false;
let touchStartFunctions = [];

function sliderActivate() {
  if (window.innerWidth < 639 && !isSliderActivated) {
    isSliderActivated = true;

    slides.forEach((slide, index) => {
      // Touch events
      touchStartFunctions[index] = touchStart(index);
      slide.addEventListener('touchstart', touchStartFunctions[index]);
      slide.addEventListener('touchend', touchEnd);
      slide.addEventListener('touchmove', touchMove);

      // Mouse events
      slide.addEventListener('mousedown', touchStartFunctions[index]);
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
      slide.addEventListener('mousemove', touchMove);
    });
  } else if (window.innerWidth >= 639 && isSliderActivated) {
    isSliderActivated = false;

    slides.forEach((slide, index) => {
      // Touch events
      slide.removeEventListener('touchstart', touchStartFunctions[index]);
      slide.removeEventListener('touchend', touchEnd);
      slide.removeEventListener('touchmove', touchMove);

      // Mouse events
      slide.removeEventListener('mousedown', touchStartFunctions[index]);
      slide.removeEventListener('mouseup', touchEnd);
      slide.removeEventListener('mouseleave', touchEnd);
      slide.removeEventListener('mousemove', touchMove);
    });

    touchStartFunctions = [];
  }
  slider.style.transform = 'none';
}

const touchStart = function(index) {
  return function(event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    // eslint-disable-next-line no-undef
    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  };
};

function touchEnd() {
  isDragging = false;
  // eslint-disable-next-line no-undef
  cancelAnimationFrame(animationID);

  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -50 && currentIndex < slides.length - 1) {
    currentIndex += 1;
  }

  if (movedBy > 50 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setIndicator();

  setPositionByIndex();

  slider.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);

    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();

  if (isDragging) {
    // eslint-disable-next-line no-undef
    requestAnimationFrame(animation);
  };
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate + currentIndex}px)`;
}

function setPositionByIndex() {
  currentTranslate = (currentIndex * -window.innerWidth);
  prevTranslate = currentTranslate;
  setSliderPosition();
}

function setIndicator() {
  let currentIndicator = document.querySelector('.indicator--active');

  if (currentIndicator) {
    currentIndicator.classList.remove('indicator--active');
  }

  currentIndicator = document.getElementById(`indicator--${currentIndex + 1}`);

  currentIndicator.classList.add('indicator--active');
}

window.addEventListener('touchstart', function(event) {
  if (!event.target.closest('#materials__slider-container')) {
    currentIndex = 0;
    currentTranslate = 0;
    prevTranslate = 0;
    setIndicator();
  }
});

window.addEventListener('load', sliderActivate);
window.addEventListener('load', setIndicator);
window.addEventListener('resize', sliderActivate);
window.addEventListener('resize', setIndicator);
