'use strict';

const page = document.querySelector('.page');
const buttonActive ='materials__card-button--active';
const textActive = 'materials__card-text--active';
const buttons = page.querySelectorAll('.materials__card-button');
const texts = page.querySelectorAll('.materials__card-text');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {

    if (buttons[i].classList.contains(buttonActive)) {
      buttons[i].classList.remove(buttonActive);
      texts[i].classList.remove(textActive);
    } else {

      if (page.querySelector('.' + buttonActive)) {
        page.querySelector('.' + buttonActive).classList.toggle(buttonActive);
        page.querySelector('.' + textActive).classList.toggle(textActive);
      }

      buttons[i].classList.toggle(buttonActive);
      texts[i].classList.toggle(textActive);
    }
  });
}
