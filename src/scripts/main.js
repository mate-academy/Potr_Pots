'use strict';

function toggleSlide1() {
  const x = document.getElementById('slide-1');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--1')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--1')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--1')
  .addEventListener('click', toggleSlide1);

function toggleSlide2() {
  const x = document.getElementById('slide-2');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--2')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--2')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--2')
  .addEventListener('click', toggleSlide2);

function toggleSlide3() {
  const x = document.getElementById('slide-3');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--3')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--3')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--3')
  .addEventListener('click', toggleSlide3);

function toggleSlide4() {
  const x = document.getElementById('slide-4');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--4')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--4')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--4')
  .addEventListener('click', toggleSlide4);

function toggleSlide5() {
  const x = document.getElementById('slide-5');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--5')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--5')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--5')
  .addEventListener('click', toggleSlide5);
