'use strict';

/* prevent scroll on menu open start */
const burgerMenu = document.querySelector('.menu-image');
const menu = document.querySelector('.page__menu');

burgerMenu.addEventListener('click', () => {
  document.body.classList.add('page__content--menu-open');
});

menu.addEventListener('click', e => {
  if (e.target.matches('a') || e.target.matches('.close-button')) {
    document.body.classList.remove('page__content--menu-open');
  }
});
/* prevent scroll on menu open end */

/* carousel block start */
const carouselDotsContainer = document.querySelector('.carousel-dots');
const carousel = document.querySelector('.materials__carousel');
const carouselItems = document.querySelector('.tooltip-block__items').children;
let positionStart = null;
let moving = false;

function touchStart(e) {
  positionStart = e.pageX;
  moving = true;
}

function touchEnd(e) {
  if (moving) {
    const currentPosition = e.pageX;
    const difference = currentPosition - positionStart;
    const index = [ ...carouselItems ].findIndex(item =>
      item.classList.contains('tooltip-block__item--active'));

    const prevItem = index - 1 < 0
      ? carouselItems.length - 1
      : index - 1;

    const nextItem = index + 1 > carouselItems.length - 1
      ? 0
      : index + 1;

    const dots = carouselDotsContainer.children;

    if (difference === 0) {
      moving = false;

      return;
    }

    carouselItems[index].classList.remove('tooltip-block__item--active');
    dots[index].classList.remove('carousel-dots__item--active');

    if (difference < 0) {
      carouselItems[nextItem].classList.add('tooltip-block__item--active');
      dots[nextItem].classList.add('carousel-dots__item--active');
    } else {
      carouselItems[prevItem].classList.add('tooltip-block__item--active');
      dots[prevItem].classList.add('carousel-dots__item--active');
    }
  }

  moving = false;
}

if (window.PointerEvent) {
  carousel.addEventListener('pointerdown', touchStart);
  carousel.addEventListener('pointerup', touchEnd);
} else {
  carousel.addEventListener('touchdown', touchStart);
  carousel.addEventListener('touchup', touchEnd);
}
/* carousel block end */

/* buy button style block start */
const buyButton = document.querySelector('.benefits-buy__button');
const breakPoint = 767;

function getScreenWidth() {
  const screenWidth = (window.innerWidth > 0)
    ? window.innerWidth
    : window.screen.width;

  return screenWidth;
};

if (getScreenWidth() > breakPoint) {
  buyButton.classList.add('button--blue');
} else {
  buyButton.classList.add('button--yellow');
}

window.addEventListener('resize', () => {
  if (getScreenWidth() > breakPoint
    && buyButton.classList.contains('button--yellow')) {
    buyButton.classList.remove('button--yellow');
    buyButton.classList.add('button--blue');
  } else if (getScreenWidth() <= breakPoint
      && buyButton.classList.contains('button--blue')) {
    buyButton.classList.remove('button--blue');
    buyButton.classList.add('button--yellow');
  }
});
/* buy button style block end */

/* form behaviour start */
const form = document.querySelector('.form-field');
const inputs = document.querySelectorAll('.form-field__input');

form.addEventListener('submit', e => {
  e.preventDefault();

  if ([ ...inputs ].every(el => el.validity.valid === true)) {
    [ ...inputs ].forEach(el => {
      el.value = '';
    });

    window.location.reload();
  }
});
/* form behaviour end */

/* polygon intersection observer start */
const polygons = document.querySelectorAll('.bckgr-polygon');
const viewportHeight = window.innerHeight
  || document.documentElement.clientHeight;

function polygonAnimation(entries) {
  entries.forEach(entry => {
    entry.classList.toggle('animation', isInViewport(entry));
  });
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top <= viewportHeight
    && rect.bottom >= 0
  );
}

window.addEventListener('scroll', () => {
  polygonAnimation(polygons);
});

window.addEventListener('load', () => {
  polygons[0].classList.add('animation', isInViewport(polygons[0]));
});
/* polygon intersection observer end */
