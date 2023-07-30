'use strict';

// $(document).ready(function() {
//   $('.rhombuses-container__rhombus').click(function() {
//     const index = $(this).data('index');

//     $('.materials__slider-box').hide();

//     $('.materials__slider-box--' + index).show();
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const sliderBoxes = document.querySelectorAll('.materials__slider-box');

  for (let i = 1; i < sliderBoxes.length; i++) {
    sliderBoxes[i].style.display = 'none';
  }

  const sliderList = document.querySelector('.materials__slider-list');
  const hammer = new Hammer(sliderList);

  let currentIndex = 0;

  hammer.on('swipeleft swiperight', function(event) {
    sliderBoxes[currentIndex].style.display = 'none';

    if (event.type === 'swipeleft') {
      currentIndex = (currentIndex + 1) % sliderBoxes.length;
    } else if (event.type === 'swiperight') {
      currentIndex = (currentIndex - 1 + sliderBoxes.length)
        % sliderBoxes.length;
    }

    sliderBoxes[currentIndex].style.display = 'block';
  });
});
