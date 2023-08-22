'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const sliderBoxes = document.querySelectorAll('.materials__slider-box');
  const sliderList = document.querySelector('.materials__slider-list');
  // eslint-disable-next-line no-undef
  const hammer = new Hammer(sliderList);

  let currentIndex = 0;

  function updateSliderDisplay() {
    for (let i = 0; i < sliderBoxes.length; i++) {
      if (i === currentIndex) {
        sliderBoxes[i].style.display = 'block';
      } else {
        sliderBoxes[i].style.display = 'none';
      }
    }
  }

  hammer.on('swipeleft swiperight', function(event) {
    sliderBoxes[currentIndex].style.display = 'none';

    if (event.type === 'swipeleft') {
      currentIndex = (currentIndex + 1) % sliderBoxes.length;
    } else if (event.type === 'swiperight') {
      // eslint-disable-next-line max-len
      currentIndex = (currentIndex - 1 + sliderBoxes.length) % sliderBoxes.length;
    }

    updateSliderDisplay();
  });

  function handleWindowSizeChange() {
    if (window.innerWidth < 768) {
      updateSliderDisplay();
      hammer.get('swipe').set({ enable: true });
    } else {
      for (let i = 0; i < sliderBoxes.length; i++) {
        sliderBoxes[i].style.display = 'block';
      }
      hammer.get('swipe').set({ enable: false });
    }
  }

  handleWindowSizeChange();
  // eslint-disable-next-line max-len
  window.addEventListener('resize', handleWindowSizeChange); // Додати слухач події для зміни розміру вікна
});

document.addEventListener('DOMContentLoaded', function() {
  const plusMinusElements = document.querySelectorAll('.materials__plus-minus');
  const sliderBoxes = document.querySelectorAll('.materials__slider-box');

  plusMinusElements.forEach((plusMinus, index) => {
    const plusButton = plusMinus.querySelector('.materials__plus');
    const minusButton = plusMinus.querySelector('.materials__minus');
    const sliderBox = sliderBoxes[index];

    plusButton.addEventListener('click', function() {
      hideAllSliderBoxes(index);
      plusButton.style.display = 'none';
      minusButton.style.display = 'block';
      sliderBox.style.opacity = '1';
      sliderBox.style.pointerEvents = 'all';
    });

    minusButton.addEventListener('click', function() {
      plusButton.style.display = 'block';
      minusButton.style.display = 'none';
      sliderBox.style.opacity = '0';
      sliderBox.style.pointerEvents = 'none';
    });
  });

  function hideAllSliderBoxes(currentIndex) {
    sliderBoxes.forEach((box, index) => {
      if (index !== currentIndex) {
        box.style.opacity = '0';
        box.style.pointerEvents = 'none';

        // eslint-disable-next-line max-len
        const plusButton = plusMinusElements[index].querySelector('.materials__plus');
        // eslint-disable-next-line max-len
        const minusButton = plusMinusElements[index].querySelector('.materials__minus');

        plusButton.style.display = 'block';
        minusButton.style.display = 'none';
      }
    });
  }
});
