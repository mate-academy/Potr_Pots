
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


let sharedBasketElement = document.getElementById('sharedBasket');
let displayElement = document.querySelectorAll('.basket__products');

let sharedBasket = 0;

function changeQuantity(value) {
  sharedBasket += value;

  // Quantity should not go below 0
  sharedBasket = Math.max(sharedBasket, 0);

  // Update both displays
  sharedBasketElement.innerText = sharedBasket;

  displayElement.forEach(element => {
    element.innerText = sharedBasket;
  });
}
