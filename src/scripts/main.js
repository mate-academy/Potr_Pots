/* eslint-disable max-len */
'use strict';
// forbid scroll when menu active

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// show and hide windows in block materials

const hideWindowBottoms
  = document.body.querySelectorAll('.hide-window__bottom');

for (const bottom of hideWindowBottoms) {
  bottom.addEventListener('click', (event) => {
    const hideWindow = event.currentTarget.parentNode;
    const hideWindowDescription
      = hideWindow.querySelector('.hide-window__description-container');

    bottom.classList.toggle('hide-window__bottom--acrive');
    hideWindowDescription.classList.toggle('hide-window__description-container--active');
    hideWindow.classList.toggle('hide-window--active');
  });

  bottom.addEventListener('click', (event) => {
    const hideWindow = event.currentTarget.parentNode;
    const hideWindowDescriptionCurent
      = hideWindow.querySelector('.hide-window__description-container');

    for (const elm of hideWindowBottoms) {
      const hideWindowDescription
        = elm.parentNode.querySelector('.hide-window__description-container');

      hideWindowDescription.style.display = 'flex';

      if (hideWindowDescriptionCurent !== hideWindowDescription) {
        elm.classList.remove('hide-window__bottom--acrive');
        hideWindowDescription.classList.remove('hide-window__description-container--active');
        elm.parentNode.classList.remove('hide-window--active');
      }
    }
  });
}

const descriptionContainers
  = document.body.querySelectorAll('.hide-window__description-container');
let index = descriptionContainers.length - 1;

for (const i of descriptionContainers) {
  i.addEventListener('touchstart', (event) => {
    index -= 1;

    if (index < 0) {
      index = descriptionContainers.length - 1;
    }

    event.currentTarget.classList.remove('hide-window__description-container--active');
    descriptionContainers[index].classList.toggle('hide-window__description-container--active');
  });
}

// cleaned form field

const questionsDlock = document.body.querySelector('.questions');
const button = questionsDlock.querySelector('.button');
const inputs = questionsDlock.querySelectorAll('.form__field');

button.addEventListener('click', (event) => {
  for (const input of inputs) {
    if (input.value.length < input.getAttribute('minlength')) {
      return;
    }
  }

  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
