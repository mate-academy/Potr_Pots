'use strict';

// for submit off
document.getElementById('myForm')
  .addEventListener('submit', e => e.preventDefault());

// go to page

document.getElementById('side-info')
  .addEventListener('click', function scrollToPageSection() {
    document.getElementById('for-whom')
      .scrollIntoView({ behavior: 'smooth' });
  });

document.getElementById('footer-logo')
  .addEventListener('click', function scrollToPageSection() {
    document.getElementById('page')
      .scrollIntoView({ behavior: 'smooth' });
  });

// info slidera

// function addClassToVisibleElement() {
//   const boxes = document.querySelectorAll('[id*="box"]');
//   const checkedDots = document
//     .getElementsByClassName('materials__dots--checked');

//   boxes.forEach((box) => {
//     const id = box.getAttribute('id');
//     const number = id.match(/\d+/); // Pobieramy cyfrę z id

//     if (number) {
//       const className
//       = `materials__dots--checked_${number[0]}`; // Tworzymy klasę z cyfrą

//       if (isVisibleOnScreen(box)) {
//         checkedDots.classList.add(className); // Dodajemy klasę do elementu
//       } else {
//         checkedDots.classList
//           .remove(className); // Usuwamy klasę z elementu,
//         // jeśli nie jest widoczny
//       }
//     }
//   });
// }

// function isVisibleOnScreen(element) {
//   const rect = element.getBoundingClientRect();

//   return (
//     rect.top >= 0
//       && rect.left >= 0
//       && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//       && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Wywołujemy funkcję po załadowaniu strony
// window.onload = addClassToVisibleElement;
// // Wywołujemy funkcję także po przewinięciu strony
// window.addEventListener('scroll', addClassToVisibleElement);
