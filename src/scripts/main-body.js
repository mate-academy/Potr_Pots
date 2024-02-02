
document.addEventListener('DOMContentLoaded', function() {
  const circles = document.querySelectorAll('.materials__circle');

  circles.forEach(function(circle) {
    const card = circle.nextElementSibling;

    circle.addEventListener('click', function() {
      if (card.classList.contains('materials__card--clicked')) {
        card.classList.remove('materials__card--clicked');
        circle.classList.remove('materials__circle--clicked');
      } else {
        card.classList.add('materials__card--clicked');
        circle.classList.add('materials__circle--clicked');
      }
    });
  });
});

function submitForm() {
  const form = document.getElementById('form');

  form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  submitForm();
});

/// /////////////////////////////

const sharedBasketElementA = document.getElementById('sharedBasketA');
const displayElementA = document.querySelectorAll('.basket__productsA');
const sharedBasketElementAV = document.getElementById('sharedBasketAV');
const displayElementAV = document.querySelectorAll('.basket__productsAV');

let sharedBasketA = 0;
let sharedBasketAV = 0;

function changeQuantityA(value) {
  sharedBasketA += value;
  sharedBasketAV += value * 7.5;

  // Quantity should not go below 0
  sharedBasketA = Math.max(sharedBasketA, 0);
  sharedBasketAV = Math.max(sharedBasketAV, 0);

  // Update both displays
  sharedBasketElementA.innerText = sharedBasketA;
  sharedBasketElementAV.innerText = sharedBasketAV;

  displayElementA.forEach(element => {
    element.innerText = sharedBasketA;
  });

  displayElementAV.forEach(element => {
    element.innerText = sharedBasketAV;
  });
}

/// ///////////////////////

const sharedBasketElementB = document.getElementById('sharedBasketB');
const displayElementB = document.querySelectorAll('.basket__productsB');
const sharedBasketElementBV = document.getElementById('sharedBasketBV');
const displayElementBV = document.querySelectorAll('.basket__productsBV');

let sharedBasketB = 0;
let sharedBasketBV = 0;

function changeQuantityB(value) {
  sharedBasketB += value;
  sharedBasketBV += value * 4.5;

  // Quantity should not go below 0
  sharedBasketB = Math.max(sharedBasketB, 0);
  sharedBasketBV = Math.max(sharedBasketBV, 0);

  // Update both displays
  sharedBasketElementB.innerText = sharedBasketB;
  sharedBasketElementBV.innerText = sharedBasketBV;

  displayElementB.forEach(element => {
    element.innerText = sharedBasketB;
  });

  displayElementBV.forEach(element => {
    element.innerText = sharedBasketBV;
  });
}

/// ///////////////////////
changeQuantityB(0);
changeQuantityA(0);
