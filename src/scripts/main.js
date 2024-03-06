'use strict';

function calculateClientWidth() {
  document.documentElement.style.setProperty(
    '--cw',
    document.documentElement.clientWidth + 'px',
  );
}

window.addEventListener('resize', calculateClientWidth, false);

document.addEventListener('DOMContentLoaded', calculateClientWidth, false);

window.addEventListener('load', calculateClientWidth);

const slider = document.querySelector('.slider');
const slideButtons = document.querySelectorAll('.slide__button');

slideButtons.forEach((slideButton) => {
  slideButton.addEventListener('click', (event) => {
    const target = slideButton.getAttribute('href');

    event.preventDefault();
    slider.scrollLeft = document.querySelector(target).offsetLeft;
  });
});

function toggleActive(circleButton) {
  const idNumber = circleButton.id.slice(-1);
  const materialsWindow = document.getElementById('window-' + idNumber);

  circleButton.classList.toggle('circle-button--active');
  materialsWindow.classList.toggle('materials__window--active');
}

const circleButtons = document.querySelectorAll('.circle-button');

circleButtons.forEach((circleButton) => {
  circleButton.addEventListener('click', function () {
    const activeCircleButton = document.querySelector('.circle-button--active');

    if (activeCircleButton !== null) {
      toggleActive(activeCircleButton);
    }

    if (circleButton !== activeCircleButton) {
      toggleActive(circleButton);
    }
  });
});
