'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

function submitForm(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submitForm);

const buttons = document.querySelectorAll('.button-circle');

buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    const textBlockSelector = this.getAttribute('data-target');
    const textBlock = document.getElementById(textBlockSelector);
    const isActive = this.getAttribute('data-active');

    if (isActive === 'false') {
      textBlock.classList.add('active');
      this.innerHTML = '&#8722;';
      this.classList.add('active');
      this.setAttribute('data-active', 'true');
    } else {
      textBlock.classList.remove('active');
      this.innerHTML = '&#43;';
      this.classList.remove('active');
      this.setAttribute('data-active', 'false');
    }
  });
});

const carouselDotsContainer = document.querySelector('.pagination');
const carousel = document.querySelector('.container__slidershow');
const carouselItems = document.querySelector('.slideshow').children;
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
      item.classList.contains('slide--active'));

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

    carouselItems[index].classList.remove('slide--active');
    dots[index].classList.remove('pagination__link--active');

    if (difference < 0) {
      carouselItems[nextItem].classList.add('slide--active');
      dots[nextItem].classList.add('pagination__link--active');
    } else {
      carouselItems[prevItem].classList.add('slide--active');
      dots[prevItem].classList.add('pagination__link--active');
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
