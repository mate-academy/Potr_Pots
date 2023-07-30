'use strict';

// function validateForm(event, form) {
//   event.preventDefault(); // Зупиняємо стандартну поведінку форми

//   // Отримуємо елементи полів форми
//   const name = form.querySelector('#name');
//   const email = form.querySelector('#email');
//   const comments = form.querySelector('#textarea');

//   // Перевіряємо, чи всі поля форми є дійсними
//   if (name.value === '') {
//     name.classList.add('invalid');
//   } else {
//     name.classList.remove('invalid');
//   }

//   // Аналогічно перевірте інші поля форми, якщо необхідно

//   if (form.checkValidity()) {
//     // Якщо форма дійсна, ви можете
//     // додати сюди додатковий JavaScript код,
//     // наприклад, відправку форми на сервер
//     // form.submit();
//   }
// }

// // Очистка класу invalid при фокусі на поле
// const formFields = document.getElementsByClassName('input__fields');

// for (const field of formFields) {
//   field.addEventListener('focus', function() {
//     this.classList.remove('invalid');
//   });
// }

// function validateForm(event, form) {
//   event.preventDefault(); // Зупинити стандартну відправку форми

//   const inputs = form.getElementsByClassName('input__fields');

//   // Проходимося по всіх полях форми і перевіряємо їх на валідність
//   for (let i = 0; i < inputs.length; i++) {
//     if (!inputs[i].checkValidity()) {
//       inputs[i].classList.add('input__fields--invalid');
//     } else {
//       inputs[i].classList.remove('input__fields--invalid');
//     }
//   }

//   // Якщо всі поля валідні, можна відправити форму
//   if (form.checkValidity()) {
//     form.submit();
//   }
// }
