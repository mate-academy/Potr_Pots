'use strict';

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});

window.onload = () => {
  let openSlide = null;

  const isTabletOrLarger = window.innerWidth >= 640;

  for (let i = 1; i <= 5; i++) {
    const input = document.getElementById(`slide${i}`);
    const label = document.querySelector(`.materials__label--${i}`);
    const slide = document.querySelector(`.materials__slide--${i}`);

    if (i === 1) {
      input.checked = true;
      slide.style.display = 'block';
      label.classList.add('active');
      openSlide = slide;
    }

    label.addEventListener('click', () => {
      if (openSlide !== slide) {
        if (openSlide !== null) {
          openSlide.style.display = 'none';

          const prevLabel = document.querySelector('.materials__label.active');

          prevLabel.classList.remove('active');
        }

        input.checked = true;
        slide.style.display = 'block';
        label.classList.add('active');
        openSlide = slide;
      } else if (isTabletOrLarger) {
        input.checked = false;
        slide.style.display = 'none';
        label.classList.remove('active');
        openSlide = null;
      }
    });
  }
};
