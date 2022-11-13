'use strict';


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#Menu') {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});


const one = document.getElementById("C1");
const two = document.getElementById("C2");
const three = document.getElementById("C3");
const four = document.getElementById("C4");
const five = document.getElementById("C5");

const b1 = document.getElementById("Mod");
const b2 = document.getElementById("Mod2");
const b3 = document.getElementById("Mod3");
const b4 = document.getElementById("Mod4");
const b5 = document.getElementById("Mod5");


one.addEventListener('click', function () {

  if (b1.style.visibility == "visible") {
    b1.style.visibility = "collapse";
  }

  else {
    b1.style.visibility = "visible";
  }

  // if (one.innerHTML == "-") {
  //   one.innerHTML = "+"
  //   one.style.background = "#eb5757";
  // }

  // else {
  //   one.innerHTML = "-";
  //   one.style.background = "rgba(0, 0, 0, 0.4)";
  // }
});

two.addEventListener('click', function () {

  if (b2.style.visibility == "visible") {
    b2.style.visibility = "collapse"
  }

  else {
    b2.style.visibility = "visible"
  }

  // if (one.innerHTML == "-") {
  //   one.innerHTML = "+"
  //   one.style.background = "#eb5757";
  // }

  // else {
  //   one.innerHTML = "-";
  //   one.style.background = "rgba(0, 0, 0, 0.4)";
  // }
});

three.addEventListener('click', function () {

  if (b3.style.visibility == "visible") {
    b3.style.visibility = "collapse"
  }

  else {
    b3.style.visibility = "visible"
  }

  // if (one.innerHTML == "-") {
  //   one.innerHTML = "+"
  //   one.style.background = "#eb5757";
  // }

  // else {
  //   one.innerHTML = "-";
  //   one.style.background = "rgba(0, 0, 0, 0.4)";
  // }
});

four.addEventListener('click', function () {

  if (b4.style.visibility == "visible") {
    b4.style.visibility = "collapse"
  }

  else {
    b4.style.visibility = "visible"
  }

  // if (one.innerHTML == "-") {
  //   one.innerHTML = "+"
  //   one.style.background = "#eb5757";
  // }

  // else {
  //   one.innerHTML = "-";
  //   one.style.background = "rgba(0, 0, 0, 0.4)";
  // }
});

five.addEventListener('click', function () {

  if (b5.style.visibility == "visible") {
    b5.style.visibility = "collapse"
  }

  else {
    b5.style.visibility = "visible"
  }

  // if (one.innerHTML == "-") {
  //   one.innerHTML = "+"
  //   one.style.background = "#eb5757";
  // }

  // else {
  //   one.innerHTML = "-";
  //   one.style.background = "rgba(0, 0, 0, 0.4)";
  // }
});

const form = document.getElementById("myform");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  form.reset();
})