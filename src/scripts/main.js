'use strict';

const menu = document.querySelector('.menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('.active');
  } else {
    menu.classList.remove('.active');
  }
});

// const showText = (number) => {
//   const myText = document
//     .querySelector(`.materials__details__text-${number}`);
//   const myBotton = document
//     .querySelector(`.materials__details__btn-${number}`);
//   const vertical = myBotton
//     .querySelector('.materials__details__btn__vertical');

//   myText.classList.toggle('visible');
//   myBotton.classList.toggle('visible');
//   vertical.classList.toggle('visible');
// };
