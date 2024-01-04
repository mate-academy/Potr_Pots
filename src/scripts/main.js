'use strict';

// Open-close menu
const page = document.getElementById('page');
const intro = document.getElementById('intro');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

const pageWithMenu = [intro, main, footer];
const menuNav = document.querySelectorAll('.menu__link');

const open = document.getElementById('openMenu');
const close = document.getElementById('closeMenu');

open.addEventListener('click', function() {
  page.classList.add('page--with-menu');
});

close.addEventListener('click', function() {
  page.classList.remove('page--with-menu');
});

pageWithMenu.forEach(windowPart => {
  windowPart.addEventListener('click', function() {
    if (page.classList.contains('page--with-menu')) {
      page.classList.remove('page--with-menu');
    }
  });
});

menuNav.forEach(link => {
  link.addEventListener('click', function() {
    if (page.classList.contains('page--with-menu')) {
      page.classList.remove('page--with-menu');
    }
  });
});

// Open-close bullets
const bullets = document.querySelectorAll('.materials__bullet');

bullets.forEach(bullet => {
  bullet.addEventListener('click', function() {
    bullet.classList.contains('materials__bullet--active')
      ? bullet.classList.remove('materials__bullet--active')
      : bullet.classList.add('materials__bullet--active');
  });
});

// Initialize Swiper
// eslint-disable-next-line
const swiper = new Swiper(".materials__swiper", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

// Basket
const catalog = {
  'smallPot': {
    name: 'Small POTR Pot',
    quantity: 0,
    price: 5.50,
    cost: 0,
  },

  'largePot': {
    name: 'Large POTR Pot',
    quantity: 0,
    price: 7.50,
    cost: 0,
  },
};

const products = Object.keys(catalog);
const cost = document.getElementById('cost');
const submitBasket = document.getElementById('basketSubmit');
const basketCounter = document.getElementsByClassName('basket-counter');

let totalCost = 0;
let totalQuantity = 0;

products.forEach(product => {
  setNameProduct(product);

  const plus = document
    .getElementById(product)
    .getElementsByClassName('product__bullet--plus')[0];

  const minus = document
    .getElementById(product)
    .getElementsByClassName('product__bullet--minus')[0];

  const quantity = document
    .getElementById(product)
    .getElementsByClassName('product__number')[0];

  const costUnit = document
    .getElementById(product)
    .getElementsByClassName('product__cost')[0];

  plus.addEventListener('click', function() {
    totalCost += catalog[product].price;
    totalQuantity++;
    catalog[product].quantity++;
    catalog[product].cost += catalog[product].price;

    quantity.innerHTML = catalog[product].quantity;
    costUnit.innerHTML = catalog[product].cost + ' $';
    cost.innerHTML = totalCost + ' $';

    for (let i = 0; i < basketCounter.length; i++) {
      basketCounter[i].innerHTML = totalQuantity;
    }

    if (submitBasket.classList.contains('button--disabled')) {
      submitBasket.classList.remove('button--disabled');
      submitBasket.classList.add('button--yellow');
    }
  });

  minus.addEventListener('click', function() {
    if (catalog[product].quantity > 0) {
      catalog[product].quantity--;
      catalog[product].cost -= catalog[product].price;
      totalCost -= catalog[product].price;
      totalQuantity--;
    }

    quantity.innerHTML = catalog[product].quantity;
    costUnit.innerHTML = catalog[product].cost + ' $';
    cost.innerHTML = totalCost + ' $';

    for (let i = 0; i < basketCounter.length; i++) {
      basketCounter[i].innerHTML = totalQuantity;
    }

    if (totalQuantity === 0
      && submitBasket.classList.contains('button--yellow')) {
      submitBasket.classList.remove('button--yellow');
      submitBasket.classList.add('button--disabled');
    }
  });
});

function setNameProduct(id) {
  const productName
  = document.getElementById(id).getElementsByClassName('product__name')[0];

  productName.innerHTML = catalog[id].name;
}
