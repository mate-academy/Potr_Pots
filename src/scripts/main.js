'use strict';

const page = document.querySelector('.page');

// flip in materials

const itemFlipActive = 'materials__flip-item--active';
const buttonFlipActive = 'materials__flip-button--active';
const itemFlip = page.querySelectorAll('.materials__flip-item');
const buttonFlip = page.querySelectorAll('.materials__flip-button');

for (let i = 0; i < buttonFlip.length; i++) {
  buttonFlip[i].addEventListener('click', () => {

    if (page.querySelector('.' + itemFlipActive)) {
      page.querySelector('.' + itemFlipActive).classList.toggle(itemFlipActive);
      page.querySelector('.' + buttonFlipActive).classList.toggle(buttonFlipActive);
    }

    itemFlip[i].classList.add(itemFlipActive);
    buttonFlip[i].classList.add(buttonFlipActive);
  });
}

// cards in materials

const buttonCardActive ='materials__card-button--active';
const textCardActive = 'materials__card-text--active';
const battonCard = page.querySelectorAll('.materials__card-button');
const textCard = page.querySelectorAll('.materials__card-text');

for (let i = 0; i < battonCard.length; i++) {
  battonCard[i].addEventListener('click', () => {

    if (battonCard[i].classList.contains(buttonCardActive)) {
      battonCard[i].classList.remove(buttonCardActive);
      textCard[i].classList.remove(textCardActive);
    } else {

      if (page.querySelector('.' + buttonCardActive)) {
        page.querySelector('.' + buttonCardActive).classList.toggle(buttonCardActive);
        page.querySelector('.' + textCardActive).classList.toggle(textCardActive);
      }

      battonCard[i].classList.toggle(buttonCardActive);
      textCard[i].classList.toggle(textCardActive);
    }
  });
}
