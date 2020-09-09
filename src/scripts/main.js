'use strict';

(function initPopUp() {
  const popUp = document.querySelector('.pop-up');
  const buyButton = document.querySelectorAll('.buy-button');
  const closeButton = document.querySelector('.pop-up__close-button');
  const basket = document.querySelector('.header__basket');
  const basketMobile = document.querySelector('.basket-mobile');

  buyButton.forEach(item => item.addEventListener('click', openPopUp));
  closeButton.addEventListener('click', closePopp);
  basket.addEventListener('click', openPopUp);
  basketMobile.addEventListener('click', openPopUp);

  function openPopUp() {
    popUp.style.cssText = `
    z-index: 50;
    opacity: 1;
  `;
  }

  function closePopp() {
    popUp.style.cssText = `
    z-index: -5;
    opacity: 0;
  `;
  }
})();
