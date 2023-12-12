'use strict';

let slideIndex = 1;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slideshow__fade');
  const dots = document.getElementsByClassName('slideshow__dots-dot');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');

  const dotEl = document.querySelectorAll('.slideshow__dots-dot');

  dotEl.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide(index + 1);
    });
  });
}

const acc = document.getElementsByClassName('materials__image-button');
let j;

for (j = 0; j < acc.length; j++) {
  acc[j].addEventListener('click', function() {
    this.classList.toggle('active');

    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
