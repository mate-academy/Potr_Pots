'use strict';

const swiper = new Swiper('.swiper', {
  spaceBetween: 50,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const popupButtons = document.querySelectorAll('.materials__popup-btn');
const popups = document.querySelectorAll('.materials__popup');

popupButtons.forEach((popupButton, index) => {
  popupButton.addEventListener('click', (event) => {
    event.preventDefault();

    const isActive = popupButton.classList.contains('materials__popup-btn--active');
    // eslint-disable-next-line no-shadow

    popupButtons.forEach(popupButton => {
      popupButton.classList.remove('materials__popup-btn--active');
    });

    popups.forEach(popup => {
      popup.classList.remove('materials__popup--active');
    });

    if (!isActive) {
      popupButton.classList.add('materials__popup-btn--active');

      popups[index].classList.add('materials__popup--active');
    }
  });
});
