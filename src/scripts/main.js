const slides = document.querySelectorAll('.slider__wrapper');
const dots = document.querySelectorAll('.dots__dot');

let index = 0;

const activeSlide = n => {
  for (const sliderWrapper of slides) {
    sliderWrapper.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = n => {
  for (const dotsDot of dots) {
    dotsDot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
};

// const nextSlide = () => {
//   if (index === slides.length - 1) {
//     index = 0;
//     prepareCurrentSlide(index);
//   } else {
//     index++;
//     prepareCurrentSlide(index);
//   }
// };
// const prevSlide = () => {
//   if (index === 0) {
//     index = slides.length - 1;
//     prepareCurrentSlide(index);
//   } else {
//     index--;
//     prepareCurrentSlide(index);
//   }
// };

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
    // clearInterval(interval);
  });
});

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);
