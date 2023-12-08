'use strict';

const track = document.querySelector('.slider__track');
const points = document.querySelectorAll('.point');
let position;

track.addEventListener('scroll', function() {
  position = Math.floor(track.scrollLeft / (track.scrollWidth / 5));

  if (Number.isInteger(position)) {
    points[position].classList.add('active');

    for (let i = 0; i < 5; i++) {
      if (i !== position) {
        points[i].classList.remove('active');
      }
    }
  }
});
