'use strict';

function showText(number) {
  const myText = document.querySelector(`.materials__details__text-${number}`);
  const myBotton = document.querySelector(`.materials__details__btn-${number}`);
  const vertical = myBotton.querySelector('.materials__details__btn__vertical');

  myText.classList.toggle('visible');
  myBotton.classList.toggle('visible');
  vertical.classList.toggle('visible');
};