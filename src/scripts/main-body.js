
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
/*
const sharedBasketElementA = document.getElementById('sharedBasketA');
const displayElementA = document.querySelectorAll('.basket__productsA');

let sharedBasketA = 0;

function changeQuantityA(value) {
  sharedBasketA += value;

  // Quantity should not go below 0
  sharedBasketA = Math.max(sharedBasketA, 0);

  // Update both displays
  sharedBasketElementA.innerText = sharedBasketA;

  displayElementA.forEach(element => {
    element.innerText = sharedBasketA;
  });
}

const sharedBasketElementB = document.getElementById('sharedBasketB');
const displayElementB = document.querySelectorAll('.basket__productsB');

let sharedBasketB = 0;

function changeQuantityB(value) {
  sharedBasketB += value;

  // Quantity should not go below 0
  sharedBasketB = Math.max(sharedBasketB, 0);

  // Update both displays
  sharedBasketElementB.innerText = sharedBasketB;

  displayElementB.forEach(element => {
    element.innerText = sharedBasketB;
  });
}

//moje //

const sharedBasketElementTotal = document.getElementById('sharedBasketTotal');
const displayElementTotal = document.querySelectorAll('.basket__productsTotal');

let sharedBasketTotal = sharedBasketA + sharedBasketB;

function changeQuantityTotal(value) {
  sharedBasketTotal += value;

   // Update both displays
  sharedBasketElementTotal.innerText = sharedBasketTotal;

  displayElementB.forEach(element => {
    element.innerText = sharedBasketTotal;
  });
}
 */

const sharedBasketElementA = document.getElementById('sharedBasketA');
const displayElementA = document.querySelectorAll('.basket__productsA');

let sharedBasketA = 0;

function changeQuantityA(value) {
  sharedBasketA += value;

  // Quantity should not go below 0
  sharedBasketA = Math.max(sharedBasketA, 0);

  // Update both displays
  sharedBasketElementA.innerText = sharedBasketA;

  displayElementA.forEach(element => {
    element.innerText = sharedBasketA;
  });

  // Update total after changing QuantityA
  updateTotal();
}

const sharedBasketElementB = document.getElementById('sharedBasketB');
const displayElementB = document.querySelectorAll('.basket__productsB');

let sharedBasketB = 0;

function changeQuantityB(value) {
  sharedBasketB += value;

  // Quantity should not go below 0
  sharedBasketB = Math.max(sharedBasketB, 0);

  // Update both displays
  sharedBasketElementB.innerText = sharedBasketB;

  displayElementB.forEach(element => {
    element.innerText = sharedBasketB;
  });

  // Update total after changing QuantityB
  updateTotal();
}

// moje //

const sharedBasketElementTotal = document.getElementById('sharedBasketTotal');
const displayElementTotal = document.querySelectorAll('.basket__productsTotal');

let sharedBasketTotal = sharedBasketA + sharedBasketB;

function updateTotal() {
  sharedBasketTotal = sharedBasketA + sharedBasketB;

  // Update total display
  sharedBasketElementTotal.innerText = sharedBasketTotal;

  displayElementTotal.forEach(element => {
    element.innerText = sharedBasketTotal;
  });
}

changeQuantityB(0);
changeQuantityA(0);
