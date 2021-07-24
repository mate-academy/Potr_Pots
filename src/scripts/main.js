'use strict';

const form = document.querySelector('.feedback__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = document.querySelectorAll('.feedback__input');

  for (const input of inputs) {
    input.value = '';
  }
});

const list = document.querySelector('.nav__list');
const checkbox = document.querySelector('.container__burger-check');

list.addEventListener('click', () => {
  checkbox.checked = false;
});

(function initPopUp() {
  const popUp = document.querySelector('.pop-up');
  const buyButton = document.querySelector('.potr-info__btn');
  const closeButton = document.querySelector('.pop-up__close-button');
  const basket = document.querySelector('.basket-mobile');
  const basketMobile = document.querySelector('.container__basket');
  const basketMobile1 = document.querySelector('.sale__button');

  buyButton.addEventListener('click', openPopUp);
  closeButton.addEventListener('click', closePopp);
  basket.addEventListener('click', openPopUp);
  basketMobile.addEventListener('click', openPopUp);
  basketMobile1.addEventListener('click', openPopUp);

  function openPopUp() {
    popUp.style.cssText = `
    z-index: 20;
    opacity: 1;
  `;
  }

  function closePopp() {
    popUp.style.cssText = `
    z-index: -7;
    opacity: 0;
  `;
  }
})();
