'use strict';

const page = document.querySelector('.page');

page.querySelector('.icon--menu').addEventListener('click', () => {
  page.querySelector('.menu').classList.add('menu--active');
  page.classList.add('page--overflow');
});

page.querySelector('.menu__close').addEventListener('click', () => {
  page.querySelector('.menu').classList.remove('menu--active');
  page.classList.remove('page--overflow');
});

for (const link of page.querySelectorAll('.menu__link')) {
  link.addEventListener('click', () => {
    page.querySelector('.menu').classList.remove('menu--active');
    page.classList.remove('page--overflow');
  });
}

const sliderLine = page.querySelector('.materials__slider-line');

function slide(button, shift) {
  sliderLine.style.left = shift;

  const activeButton = page.querySelector('.materials__button--active');

  activeButton.classList.remove('materials__button--active');

  button.classList.add('materials__button--active');
};

for (let i = 1; i <= 5; i++) {
  page.querySelector(`.materials__button--b` + i).addEventListener('click', () => slide(page.querySelector('.materials__button--b' + i), '-' + ((i - 1) * 100) + '%'));
}

const buttonActive = 'materials__cros-button--active';
const textActive = 'materials__cros-text--active';

function addText(button, text) {
  if (button.classList.contains('materials__cros-button--active')) {
    button.classList.remove('materials__cros-button--active');
    text.classList.remove('materials__cros-text--active');
  } else {
    if (page.querySelector('.materials__cros-button--active') !== null) {
      page.querySelector('.' + buttonActive).classList.toggle(buttonActive);

      page.querySelector('.' + textActive).classList.toggle(textActive);
    };

    button.classList.toggle('materials__cros-button--active');

    text.classList.toggle('materials__cros-text--active');
  }
}

for (let i = 1; i <= 5; i++) {
  const button = page.querySelector('.materials__cros-button--b' + i);
  const text = page.querySelector('.materials__cros-text-t' + i);

  button.addEventListener('click', () => addText(button, text));
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const callback = function(entries, obs) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
      switch (entry.target.getAttribute('data-target')) {
        case 'about': aboutAnim();
          break;
        case 'title': TitleAnim(entry.target);
          break;
      }
      obs.unobserve(entry.target);
    }
  });
};
// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(callback, options);

const target = document.querySelectorAll('[data-target]');

target.forEach(el => {
  observer.observe(el);
});

function aboutAnim() {
  const featuresArticles = document.querySelectorAll('.features__article');

  featuresArticles.forEach(el => {
    el.style.transform = 'translateY(0)';
    el.style.opacity = '1';
  });
}

function TitleAnim(title) {
  title.style.transform = 'translateX(0)';
  title.style.opacity = '1';
}
