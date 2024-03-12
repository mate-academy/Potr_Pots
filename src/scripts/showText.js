'use strict';

const buttons = document.querySelectorAll('.materials__details__btn');

buttons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const text = document.querySelector(`.materials__details__text-${index + 1}`);
    button.classList.toggle('visible');
    text.classList.toggle('visible');
  });
});