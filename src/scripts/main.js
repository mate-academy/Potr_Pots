'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
});

const advantage1 = document.querySelector('.materials__advantage--1');

const highlight = document.querySelector('.materials__highlight-paragraph');
const highlightHidden = document.querySelector(
  '.materials__highlight-paragraph--hidden',
);
const showMore = document.getElementById('show-more');

const showHighlightParagraph = () => {
  advantage1.classList.add('materials__advantage--hidden');
  showMore.classList.add('materials__highlight-more--hide');
  highlightHidden.classList.remove('materials__highlight-paragraph--hidden');
  highlightHidden.classList.add('materials__highlight-paragraph--shown');
};

const hideHighlightParagraph = () => {
  advantage1.classList.remove('materials__advantage--hidden');
  showMore.classList.remove('materials__highlight-more--hide');
  highlightHidden.classList.add('materials__highlight-paragraph--hidden');
  highlightHidden.classList.remove('materials__highlight-paragraph--shown');
};

highlight.addEventListener('click', () => {
  showHighlightParagraph();
});

highlightHidden.addEventListener('click', hideHighlightParagraph);

document.addEventListener('click', e => {
  if (!highlight.contains(e.target) && !highlightHidden.contains(e.target)) {
    hideHighlightParagraph();
  }
});

const buttonsLists = document.querySelectorAll('.buttons-list');
const advantages = document.querySelectorAll('.materials__advantage');
let transform = 0;

const setTransform = (shift) => {
  advantages.forEach(advantage => {
    advantage.style.transform = `translateX(${shift}%)`;
  });
};

buttonsLists.forEach(list => {
  list.addEventListener('click', e => {
    const target = e.target;
    const buttons = list.querySelectorAll('.buttons-list__button');
    const targetIndex = Array.from(buttons).indexOf(target);

    transform = -(targetIndex * 100) || 0;

    setTransform(transform);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1279) {
    hideHighlightParagraph();
  }

  transform = 0;
  setTransform(transform);
});

const sideButtons = document.querySelectorAll('.advantage__description-button');

sideButtons.forEach(button => {
  button.addEventListener('click', () => {
    transform = button.classList.contains('advantage__description-button--back')
      ? transform + 100 || 0
      : transform - 100;

    setTransform(transform);
  });
});

const advantagesButtons = document.querySelectorAll('.advantage__button');

advantagesButtons.forEach(button => {
  const description = button.parentNode.querySelector(
    '.advantage__description',
  );

  button.addEventListener('click', () => {
    button.classList.toggle('advantage__button--close');
    description.classList.toggle('advantage__description--shown');
  });

  document.addEventListener('click', e => {
    if (!button.contains(e.target)) {
      button.classList.remove('advantage__button--close');
      description.classList.remove('advantage__description--shown');
    }
  });
});
