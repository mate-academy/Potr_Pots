'use strict';

const buttons = document.querySelectorAll('.materials__details__btn');

buttons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    const text = document.querySelector(`.materials__details__text-${index + 1}`);
    const button = document.querySelector(`.materials__details__btn-${index + 1}`);
    const vertical = button.querySelector('.materials__details__btn__vertical');

    button.classList.toggle('visible');
    vertical.classList.toggle('visible');
    text.classList.toggle('visible');
  });
});