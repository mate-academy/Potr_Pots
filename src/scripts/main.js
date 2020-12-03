'use strict';

const cartBtn = document.querySelector('.header__cart');
const openCart = document.querySelector('.shopping-cart');

cartBtn.onclick = function() {
  openCart.classList.toggle('shopping-cart--disabled');
  openCart.classList.toggle('shopping-cart--move');
};

const closeBtn = document.querySelector('.close-btn');

closeBtn.onclick = function() {
  openCart.classList.remove('shopping-cart--move');
  openCart.classList.add('shopping-cart--disabled');
};
