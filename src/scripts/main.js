'use strict';

const headerFunc = () => {
  const header = document.getElementById('header-top');
  const menuOpen = document.getElementById('header-menu-open');
  const menuClose = document.getElementById('header-menu-close');

  const headerClose = () => {
    header.classList.remove('header--open');
  };

  menuOpen.addEventListener('click', () => {
    header.classList.add('header--open');
  });

  menuClose.addEventListener('click', headerClose);

  document.querySelectorAll('.nav__item').forEach(li => {
    li.addEventListener('click', headerClose);
  });
};

const slider = () => {
  const slides = document.querySelectorAll('.slider__slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  const maxSlide = slides.length - 1;
  let curSlide = 0;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => {
        dot.classList.remove('dots__dot--active');
      });

    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = () => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${100 * curSlide}%)`;
    });
  };

  const nextSlide = () => {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    };

    goToSlide();
    activateDot(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    goToSlide();
    activateDot(curSlide);
  };

  const init = () => {
    goToSlide();
    createDots();
    activateDot(curSlide);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};

headerFunc();
slider();
