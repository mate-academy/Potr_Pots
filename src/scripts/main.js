'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// // Select all the buttons and contents
// const buttons = document.querySelectorAll(".materials__button");
// const contents = document.querySelectorAll(".materials__description");

// // Add click event listener to each button
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     // Get the target content element
//     const targetContent = document.getElementById(button.dataset.target);

//     // Toggle the active class on the button and content elements
//     button.classList.toggle("active");
//     targetContent.classList.toggle("active");

//     // Change the text content of the button
//     if (button.classList.contains("active")) {
//       button.textContent = "-";
//     } else {
//       button.textContent = "+";
//     }

//     // Hide other contents and buttons
//     contents.forEach(content => {
//       if (content.id !== button.dataset.target
// && content.classList.contains("active")) {
//         content.classList.remove("active");
//       }
//     });

//     buttons.forEach(otherButton => {
//       if (otherButton.dataset.target !== button.dataset.target
//  && otherButton.classList.contains("active")) {
//         otherButton.classList.remove("active");
//         otherButton.textContent = "+";
//       }
//     });
//   });
// });

// const buttons = document.querySelectorAll(".button-circle");
// const blocks = document.querySelectorAll(".materials__description");

// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     if (button.classList.contains("button-circle__active")) {
//       button.classList.remove("button-circle__active");
//       button.textContent = "+";
//       blocks[index].style.display = "none";
//     } else {
//       button.classList.add("button-circle__active");
//       button.textContent = "-";
//       blocks.forEach((block) => {
//         block.style.display = "none";
//       });
//       blocks[index].style.display = "block";
//     }
//   });
// });
