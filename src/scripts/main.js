'use strict';

const button1 = document.getElementById('toggle-1');
const button2 = document.getElementById('toggle-2');
const button3 = document.getElementById('toggle-3');
const button4 = document.getElementById('toggle-4');
const button5 = document.getElementById('toggle-5');

const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');
const content4 = document.getElementById('content-4');
const content5 = document.getElementById('content-5');

const plus1 = document.getElementById('plus-1');
const plus2 = document.getElementById('plus-2');
const plus3 = document.getElementById('plus-3');
const plus4 = document.getElementById('plus-4');
const plus5 = document.getElementById('plus-5');

const minus1 = document.getElementById('minus-1');
const minus2 = document.getElementById('minus-2');
const minus3 = document.getElementById('minus-3');
const minus4 = document.getElementById('minus-4');
const minus5 = document.getElementById('minus-5');

function Dropdown1() {
  content1.classList.toggle('dp-active');

  if (content1.classList.contains('dp-active')) {
    plus1.style.display = 'none';
    minus1.style.display = 'block';
  } else {
    plus1.style.display = 'block';
    minus1.style.display = 'none';
  }
}

button1.addEventListener('click', Dropdown1);

function Dropdown2() {
  content2.classList.toggle('dp-active');

  if (content2.classList.contains('dp-active')) {
    plus2.style.display = 'none';
    minus2.style.display = 'block';
  } else {
    plus2.style.display = 'block';
    minus2.style.display = 'none';
  }
}

button2.addEventListener('click', Dropdown2);

function Dropdown3() {
  content3.classList.toggle('dp-active');

  if (content3.classList.contains('dp-active')) {
    plus3.style.display = 'none';
    minus3.style.display = 'block';
  } else {
    plus3.style.display = 'block';
    minus3.style.display = 'none';
  }
}

button3.addEventListener('click', Dropdown3);

function Dropdown4() {
  content4.classList.toggle('dp-active');

  if (content4.classList.contains('dp-active')) {
    plus4.style.display = 'none';
    minus4.style.display = 'block';
  } else {
    plus4.style.display = 'block';
    minus4.style.display = 'none';
  }
}

button4.addEventListener('click', Dropdown4);

function Dropdown5() {
  content5.classList.toggle('dp-active');

  if (content5.classList.contains('dp-active')) {
    plus5.style.display = 'none';
    minus5.style.display = 'block';
  } else {
    plus5.style.display = 'block';
    minus5.style.display = 'none';
  }
}

button5.addEventListener('click', Dropdown5);

const sliderThumb = document.getElementById('slider__thumb');
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener('change', () => {
    moveSlider(index);
  });
});

function moveSlider(index) {
  const screenWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  let sliderWidth;

  const setSliderWidth = () => {
    if (screenWidth > 501) {
      sliderWidth = 400;
    } else if (screenWidth <= 500 && screenWidth >= 420) {
      sliderWidth = 360;
    } else if (screenWidth <= 419 && screenWidth >= 368) {
      sliderWidth = 300;
    } else if (screenWidth <= 367 && screenWidth >= 332) {
      sliderWidth = 280;
    } else if (screenWidth <= 332) {
      sliderWidth = 260;
    }
  };

  setSliderWidth();

  const newPosition = -index * sliderWidth + 'px';

  sliderThumb.style.transform = 'translateX(' + newPosition + ')';
}
