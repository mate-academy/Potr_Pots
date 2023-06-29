'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function initSlide() {
  showSlides(1);

  const rombs = document.getElementsByClassName('romb');

  for (let i = 0; i < rombs.length; i++) {
    rombs[i].onclick = currentSlide;
  }
}

function currentSlide() {
  showSlides(+this.id);
}

function showSlides(current) {
  const slides = document.getElementsByClassName('materials__item-slides');
  const rombs = document.getElementsByClassName('romb');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    rombs[i].className = rombs[i].className.replace(' active', '');
  }
  slides[current - 1].style.display = 'block';
  rombs[current - 1].className += ' active';
}
initSlide();
