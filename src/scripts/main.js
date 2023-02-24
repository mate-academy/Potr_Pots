'use strict';

function controlMaterialsCards() {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.matches('.card__button')) {
        return;
      }

      if (card.classList.contains('card--active')) {
        card.classList.remove('card--active');

        return;
      }

      card.classList.add('card--active');
    });
  });
}

controlMaterialsCards();

function initSlider() {
  const slider = document.querySelector('.slider');
  const sliderViewport = document.querySelector('.slider__viewport');
  const sliderLine = document.querySelector('.slider__line');
  const slides = document.querySelectorAll('.slider__slide');
  const dots = document.querySelectorAll('.slider__dot');
  let width = sliderViewport.offsetWidth;
  let offSet = 0;
  const maxOffSet = (slides.length - 1) * width;
  let currentSlide = 0;
  let touchStart = 0;

  dots[currentSlide].classList.add('slider__dot--selected');

  function calculateWidth() {
    width = sliderViewport.offsetWidth;

    sliderLine.style.width = width * slides.length + 'px';

    slides.forEach(slide => {
      slide.style.width = width + 'px';
    });
  }

  calculateWidth();

  window.addEventListener('resize', calculateWidth);

  slider.addEventListener('touchstart', (event) => {
    touchStart = event.touches[0].clientX;
  });

  slider.addEventListener('touchend', (event) => {
    const touchMove = event.changedTouches[0].clientX;
    const touchDiff = touchStart - touchMove;
    const validMove = Math.abs(touchDiff) > 50;

    switch (true) {
      case (touchDiff > 0 && validMove):
        if (offSet !== maxOffSet) {
          offSet += width;
          currentSlide++;
        }
        break;
      case (touchDiff < 0 && validMove):
        if (offSet !== 0) {
          offSet -= width;
          currentSlide--;
        }
        break;
    }

    sliderLine.style.transform = `translateX(${-offSet}px)`;

    dots.forEach((dot, index) => {
      dot.classList.remove('slider__dot--selected');

      if (index === currentSlide) {
        dot.classList.add('slider__dot--selected');
      }
    });
  });
}

initSlider();

function initObserver() {
  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden--left', 'hidden--right');
      }
    });
  };

  const forWhomObserver = new window.IntersectionObserver(callback, {
    threshold: 0.1,
  });

  const forWhomItems = document.querySelectorAll('.for-whom__item');

  forWhomItems.forEach(item => {
    forWhomObserver.observe(item);
  });

  const teamObserver = new window.IntersectionObserver(callback, {
    threshold: 0.4,
  });

  const teamItems = document.querySelectorAll(
    '[data-observed="team-observed"]'
  );

  teamItems.forEach(item => {
    teamObserver.observe(item);
  });

  const benefitObserver = new window.IntersectionObserver(callback, {
    threshold: 0.4,
  });

  const benefitCards = document.querySelector('.benefits__cards');

  benefitObserver.observe(benefitCards);

  const questionsObserver = new window.IntersectionObserver(callback, {
    threshold: 0.4,
  });

  const questionsItems = document.querySelectorAll(
    '[data-observed="questions-observed"]'
  );

  questionsItems.forEach(item => {
    questionsObserver.observe(item);
  });
}

initObserver();
