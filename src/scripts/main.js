/* eslint-disable max-len */
// /* eslint-disable max-len */
// /* eslint-disable no-console */
// 'use strict';
// console.log(123);

// const background = document.querySelector('.info');
// const info = document.createElement('div');
// const buttons = document.querySelectorAll('.materials__button');
// const arrayButtons = Array.from(buttons);

// background.append(info);

// let currentClass = 'materials__info--active';

// let buttonClass = 'grey';

// function changeContent(pageNumber, classNumber) {
//   const materialsDescription = document.querySelector('.materials__description-text');
//   let text = materialsDescription.textContent;

//   switch (pageNumber) {
//     case 0:
//       text = 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ';
//       break;
//     case 1:
//       text = 'Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ';
//       break;
//     case 2:
//       text = 'Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology. ';
//       break;
//     case 3:
//       text = 'POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.';
//       break;
//     case 4:
//       text = 'POTR Pots are constructed using recycled polypropylene which can be fully recycled. ';
//       break;
//   }

//   materialsDescription.textContent = text;
//   info.textContent = text;
//   info.className = (`materials__info materials__info--${classNumber}`);

//   if (currentClass === 'materials__info--none') {
//     info.classList.remove('materials__info--active');
//     info.classList.add('materials__info--none');
//     currentClass = 'materials__info--active';
//   } else {
//     info.classList.remove('materials__info--none');
//     info.classList.add('materials__info--active');
//     currentClass = 'materials__info--none';
//   }

//   if (buttonClass === 'grey') {
//     arrayButtons[classNumber].classList.remove('red');
//     arrayButtons[classNumber].classList.add('grey');
//     arrayButtons[classNumber].textContent = '-';
//     buttonClass = 'red';
//   } else {
//     arrayButtons[classNumber].classList.remove('grey');
//     arrayButtons[classNumber].classList.add('red');
//     arrayButtons[classNumber].textContent = '+';
//     buttonClass = 'grey';
//   }
//   console.log('works');
// }

// const paginationButtons = document.querySelectorAll('.materials__description__button-item');
// const array = Array.from(paginationButtons);

// console.log(arrayButtons);

// for (let i = 0; i < array.length; i++) {
//   array[i].addEventListener('click', function() {
//     changeContent(i);
//   });
// }

// for (let i = 0; i < arrayButtons.length; i++) {
//   arrayButtons[i].addEventListener('mouseover', function() {
//     console.log('works2');
//     changeContent(i, i);
//   });

//   arrayButtons[i].addEventListener('mouseout', function() {
//     info.classList.remove('materials__info--active', 'materials__info--none');
//     currentClass = 'materials__info--active';
//   });
// }

/* eslint-disable max-len */
/* eslint-disable no-console */
// 'use strict';
// console.log(123);

// const background = document.querySelector('.info');
// const info = document.createElement('div');
// const buttons = document.querySelectorAll('.materials__button');
// const arrayButtons = Array.from(buttons);

// background.append(info);

// let currentClass = 'materials__info--active';
// let buttonClass = 'grey';

// function changeContent(pageNumber, classNumber) {
//   const materialsDescription = document.querySelector('.materials__description-text');
//   let text = materialsDescription.textContent;

//   switch (pageNumber) {
//     case 0:
//       text = 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ';
//       break;
//     case 1:
//       text = 'Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ';
//       break;
//     case 2:
//       text = 'Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology. ';
//       break;
//     case 3:
//       text = 'POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.';
//       break;
//     case 4:
//       text = 'POTR Pots are constructed using recycled polypropylene which can be fully recycled. ';
//       break;
//   }

//   materialsDescription.textContent = text;
//   info.textContent = text;
//   info.className = (`materials__info materials__info--${classNumber}`);

//   if (currentClass === 'materials__info--none') {
//     info.classList.remove('materials__info--active');
//     info.classList.add('materials__info--none');
//     currentClass = 'materials__info--active';
//   } else {
//     info.classList.remove('materials__info--none');
//     info.classList.add('materials__info--active');
//     currentClass = 'materials__info--none';
//   }

//   if (buttonClass === 'red') {
//     info.classList.remove('grey');
//     info.classList.add('red');
//     buttonClass = 'grey';
//   } else {
//     info.classList.remove('red');
//     info.classList.add('grey');
//     buttonClass = 'red';
//   }

//   console.log('works');
// }

// const paginationButtons = document.querySelectorAll('.materials__description__button-item');
// const array = Array.from(paginationButtons);

// console.log(arrayButtons);

// for (let i = 0; i < array.length; i++) {
//   array[i].addEventListener('mouseover', function() {
//     changeContent(i);
//   });

//   array[i].addEventListener('mouseout', function() {
//     info.classList.remove('materials__info--active', 'materials__info--none');
//     currentClass = 'materials__info--active';
//   });
// }

// for (let i = 0; i < arrayButtons.length; i++) {
//   arrayButtons[i].addEventListener('mouseover', function() {
//     console.log('works2');
//     changeContent(i, i);
//   });

//   arrayButtons[i].addEventListener('mouseout', function() {
//     info.classList.remove('materials__info--active', 'materials__info--none');
//     arrayButtons[i].remove('grey', 'red');

//     currentClass = 'materials__info--active';
//     buttonClass = 'grey';
//   });
// }

/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';
// console.log(123);

// const background = document.querySelector('.info');
// const info = document.createElement('div');
// const buttons = document.querySelectorAll('.materials__button');
// const arrayButtons = Array.from(buttons);

// background.append(info);

// let currentClass = 'materials__info--active';

// function changeContent(pageNumber, classNumber) {
//   const materialsDescription = document.querySelector('.materials__description-text');
//   let text = materialsDescription.textContent;

//   switch (pageNumber) {
//     case 0:
//       text = 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ';
//       break;
//     case 1:
//       text = 'Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ';
//       break;
//     case 2:
//       text = 'Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology. ';
//       break;
//     case 3:
//       text = 'POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.';
//       break;
//     case 4:
//       text = 'POTR Pots are constructed using recycled polypropylene which can be fully recycled. ';
//       break;
//   }

//   materialsDescription.textContent = text;
//   info.textContent = text;
//   info.className = (`materials__info materials__info--${classNumber}`);

//   info.classList.toggle('materials__info--active');
//   info.classList.toggle('materials__info--none');

//   arrayButtons[classNumber].classList.toggle('grey');
//   arrayButtons[classNumber].classList.toggle('red');

//   console.log('works');
// }

// const paginationButtons = document.querySelectorAll('.materials__description__button-item');
// const array = Array.from(paginationButtons);

// console.log(arrayButtons);

// for (let i = 0; i < array.length; i++) {
//   array[i].addEventListener('mouseover', function() {
//     changeContent(i);
//   });

//   array[i].addEventListener('mouseout', function() {
//     info.classList.remove('materials__info--active', 'materials__info--none');
//     currentClass = 'materials__info--active';
//   });
// }

// for (let i = 0; i < arrayButtons.length; i++) {
//   arrayButtons[i].addEventListener('mouseover', function() {
//     console.log('works2');
//     changeContent(i, i);
//   });

//   arrayButtons[i].addEventListener('mouseout', function() {
//     info.classList.remove('materials__info--active', 'materials__info--none');
//     currentClass = 'materials__info--active';
//   });
// }

const background = document.querySelector('.info');
const info = document.createElement('div');
const buttons = document.querySelectorAll('.materials__button');
const arrayButtons = Array.from(buttons);

const paginationButtons = document.querySelectorAll('.materials__description__button-item');
const array = Array.from(paginationButtons);

background.append(info);

function changeContent(pageNumber, classNumber) {
  const materialsDescription = document.querySelector('.materials__description-text');
  let text = materialsDescription.textContent;

  switch (pageNumber) {
    case 0:
      text = 'We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. ';
      break;
    case 1:
      text = 'Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ';
      break;
    case 2:
      text = 'Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology. ';
      break;
    case 3:
      text = 'POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.';
      break;
    case 4:
      text = 'POTR Pots are constructed using recycled polypropylene which can be fully recycled. ';
      break;
  }

  materialsDescription.textContent = text;
  info.textContent = text;
  info.className = (`materials__info materials__info--${classNumber}`);

  info.classList.toggle('materials__info--active');

  arrayButtons[classNumber].classList.toggle('materials__button--red');
  arrayButtons[classNumber].classList.toggle('materials__button--grey');
}

for (let i = 0; i < array.length; i++) {
  array[i].addEventListener('click', function() {
    changeContent(i);
  });
}

for (let i = 0; i < arrayButtons.length; i++) {
  arrayButtons[i].addEventListener('mouseover', function() {
    console.log('works2');
    changeContent(i, i);
    arrayButtons[i].textContent = '-';
  });

  arrayButtons[i].addEventListener('mouseout', function() {
    info.classList.remove('materials__info--active');
    info.classList.add('materials__info--none');
    arrayButtons[i].classList.remove('materials__button--grey');
    arrayButtons[i].classList.add('materials__button--red');
    arrayButtons[i].textContent = '+';
  });
}

const form = document.querySelector('.contact__form');

const inputs = document.querySelectorAll('.contact__form-field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

function handleHashChange() {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    console.log(3);
  } else {
    console.log(4);
    document.body.classList.remove('page__body--with-menu');
  }
}

// Вызываем функцию при загрузке страницы
handleHashChange();

// Добавляем обработчик события для изменения hash
window.addEventListener('hashchange', handleHashChange);
