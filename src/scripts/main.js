'use strict';

const sliderPosition = document.querySelector('.slider__block').style;
const rhombus = {
  rhombus1: document.querySelector('.slider__switcher-rhombus-1'),
  rhombus2: document.querySelector('.slider__switcher-rhombus-2'),
  rhombus3: document.querySelector('.slider__switcher-rhombus-3'),
  rhombus4: document.querySelector('.slider__switcher-rhombus-4'),
  rhombus5: document.querySelector('.slider__switcher-rhombus-5'),
};
const possiblePositions = {
  text1: '0',
  text2: '-305px',
  text3: '-610px',
  text4: '-915px',
  text5: '-1220px',
};

rhombus.rhombus1.addEventListener('click',
  () => smallSliderBrain(rhombus.rhombus1));

rhombus.rhombus2.addEventListener('click',
  () => smallSliderBrain(rhombus.rhombus2));

rhombus.rhombus3.addEventListener('click',
  () => smallSliderBrain(rhombus.rhombus3));

rhombus.rhombus4.addEventListener('click',
  () => smallSliderBrain(rhombus.rhombus4));

rhombus.rhombus5.addEventListener('click',
  () => smallSliderBrain(rhombus.rhombus5));

function smallSliderBrain(rhombusClick) {
  for (const key in rhombus) {
    const rhomb = rhombus[key];

    if (rhomb.classList.length > 1) {
      rhomb.classList.remove(rhomb.classList[1]);
    }
  }

  rhombusClick.classList.add('slider__switcher-rhombus--active');

  switch (rhombusClick) {
    case rhombus.rhombus1:
      sliderPosition.left = possiblePositions.text1;
      break;
    case rhombus.rhombus2:
      sliderPosition.left = possiblePositions.text2;
      break;
    case rhombus.rhombus3:
      sliderPosition.left = possiblePositions.text3;
      break;
    case rhombus.rhombus4:
      sliderPosition.left = possiblePositions.text4;
      break;
    case rhombus.rhombus5:
      sliderPosition.left = possiblePositions.text5;
      break;
  }
}
