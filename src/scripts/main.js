'use strict';
/* eslint-disable */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },

});

/* document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  console.log("submission")
  // Reset the input fields after submission
  document.getElementById("myForm").reset();


  console.log("reset")

}); */

const myForm = document.getElementById("myForm");

// Listen for the form's "submit" event
myForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Reset the form
  myForm.reset();

  // Submit the form data to the server
  myForm.submit();
});
