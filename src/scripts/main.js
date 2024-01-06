'use strict';

const page = document.querySelector('.page');

// open and clouse asaid manu

page.querySelector('.icon--menu').addEventListener('click', () => {
  page.querySelector('.menu').classList.add('menu--active');
  page.classList.add('page--overflow');
});

page.querySelector('.menu__close').addEventListener('click', () => {
  page.querySelector('.menu').classList.remove('menu--active');
  page.classList.remove('page--overflow');
});

for (const link of page.querySelectorAll('.menu__link')) {
  link.addEventListener('click', () => {
    page.querySelector('.menu').classList.remove('menu--active');
    page.classList.remove('page--overflow');
  });
}

// slider of materials section

const sliderLine = page.querySelector('.materials__slider-line');

function slide(button, shift) {
  sliderLine.style.left = shift;

  const activeButton = page.querySelector('.materials__button--active');

  activeButton.classList.remove('materials__button--active');

  button.classList.add('materials__button--active');
};

for (let i = 1; i <= 5; i++) {
  page.querySelector(`.materials__button--b` + i).addEventListener('click', () => slide(page.querySelector('.materials__button--b' + i), '-' + ((i - 1) * 100) + '%'));
}

// drop text in meterials section
const buttonActive = 'materials__cros-button--active';
const textActive = 'materials__cros-text--active';

function addText(button, text) {
  if (button.classList.contains('materials__cros-button--active')) {
    button.classList.remove('materials__cros-button--active');
    text.classList.remove('materials__cros-text--active');
  } else {
    if (page.querySelector('.materials__cros-button--active') !== null) {
      page.querySelector('.' + buttonActive).classList.toggle(buttonActive);

      page.querySelector('.' + textActive).classList.toggle(textActive);
    };

    button.classList.toggle('materials__cros-button--active');

    text.classList.toggle('materials__cros-text--active');
  }
}

for (let i = 1; i <= 5; i++) {
  const button = page.querySelector('.materials__cros-button--b' + i);
  const text = page.querySelector('.materials__cros-text-t' + i);

  button.addEventListener('click', () => addText(button, text));
}
