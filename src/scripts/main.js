'use strict';

const openers = document.querySelectorAll('.modals__opener');
const sliderpages = document.querySelectorAll('.slider__page');
const controls = document.getElementById('mtrls-n-ftrs--controls');

const moveImage = (to) => {
  let from;
  const classList = controls.classList;

  for (let i = 0; i < classList.length; i++) {
    from = classList[i].match(/(?<=--selected-)./g);

    if (from) {
      break;
    }
  }

  controls.classList.remove('modals--selected-' + from);
  controls.classList.add('modals--selected-' + to);
  controls.classList.remove('slider--selected-' + from);
  controls.classList.add('slider--selected-' + to);
};

for (let i = 0; i < openers.length; i++) {
  openers[i].addEventListener('click', (e) => {
    moveImage(i + 1);
  });

  sliderpages[i].addEventListener('click', (e) => {
    moveImage(i + 1);
  });
}
