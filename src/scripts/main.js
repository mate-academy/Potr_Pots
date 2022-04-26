'use strict';

const wrapper = document.querySelector('.page__wrapper');
const basketImg = document.querySelector('.basket__img');
const basket = document.querySelector('.basket');
const menuBasket = document.querySelector('.menu__basket');
const basketClose = document.querySelector('.basket__close');
const largePotOrder = document.querySelector('.basket__large--order');
const largeAdd = document.querySelector('.basket__large--add');
const largeRemove = document.querySelector('.basket__large--remove');
const largeDelete = document.querySelector('.basket__large--delete');
const largePrice = document.querySelector('.basket__large--unit-price');
const largeSum = document.querySelector('.basket__large--total-price');
const basketSum = document.querySelector('.basket__sum');
const menuBasketNumb = document.querySelector('.menu__basket--quantity');
const checkoutButton = document.querySelector('.basket__checkout');
const checkoutPage = document.querySelector('.checkout');
const checkoutClose = document.querySelector('.checkout__close');

menuBasketNumb.textContent = menuBasketNumb.dataset.number;

const checkoutAmount = document.querySelector('.checkout__amount');
const checkoutSubmit = document.querySelector('.checkout__submit');
const succesfullPayment = document.getElementById('succesfullPayment');
const inputsCheckout = [ ...document.querySelectorAll('.formInput') ];
const succesfullClose = document.querySelector('.succesfullPayment__close');
const checkoutForm = document.querySelector('.checkout__content');
const homePageButton = document.querySelector('.home-page__button');
const benefitsButton = document.querySelector('.benefits__button');
const materialsOpen = document.querySelector('.materials__opensInfo');
const aboutBobbiny
  = [ ...document.querySelectorAll('.materials__about-bobbiny') ];

function openingPage(page) {
  page.classList.add('dropdownPage--active');
  wrapper.classList.add('page__wrapper--background');
}

function closingPage(page) {
  page.classList.remove('dropdownPage--active');
  wrapper.classList.remove('page__wrapper--background');
}

// открытие - закрытие корзины //
basketImg.addEventListener('click', (ev) => {
  openingPage(basket);
});

menuBasket.addEventListener('click', (ev) => {
  openingPage(basket);
});

homePageButton.addEventListener('click', (ev) => {
  openingPage(basket);
});

benefitsButton.addEventListener('click', (ev) => {
  openingPage(basket);
});

basketClose.addEventListener('click', (ev) => {
  closingPage(basket);
});

// large POT //
largePotOrder.textContent = largePotOrder.dataset.order;
largePrice.textContent = '$ ' + largePrice.dataset.price;
largeSum.textContent = '$ ' + 0;

function findValues() {
  basketSum.dataset.sum
    = (+smallSum.dataset.sum + +largeSum.dataset.sum).toFixed(2);
  basketSum.textContent = '$ ' + basketSum.dataset.sum;

  menuBasketNumb.dataset.number
    = +smallPotOrder.dataset.quantity + +largePotOrder.dataset.quantity;
  menuBasketNumb.textContent = menuBasketNumb.dataset.number;
  checkoutAmount.dataset.amount = basketSum.dataset.sum;
  checkoutAmount.textContent = 'USD ' + checkoutAmount.dataset.amount;
}

function letCalcOrder(x, y) {
  if (document.documentElement.scrollWidth >= 768) {
    x.dataset.order = x.dataset.quantity + ' ORDER';
  } else {
    x.dataset.order = x.dataset.quantity;
  };

  x.textContent = x.dataset.order;
  y.dataset.sum = (largePrice.dataset.price * x.dataset.quantity).toFixed(2);
  y.textContent = '$ ' + y.dataset.sum;
  findValues();

  if (document.documentElement.scrollWidth >= 768) {
    smallPotOrder.dataset.order = smallPotOrder.dataset.quantity + ' ORDER';
  } else {
    smallPotOrder.dataset.order = smallPotOrder.dataset.quantity;
  }

  if (menuBasketNumb.dataset.number === '0') {
    checkoutButton.setAttribute('disabled', 'disabled');
  } else {
    checkoutButton.removeAttribute('disabled');
  }
};

largeAdd.addEventListener('click', (ev) => {
  largePotOrder.dataset.quantity = +largePotOrder.dataset.quantity + 1;
  letCalcOrder(largePotOrder, largeSum);
});

largeRemove.addEventListener('click', (ev) => {
  if (largePotOrder.dataset.quantity === '0') {
    largeSum.textContent = '$ ' + 0;
  } else {
    largePotOrder.dataset.quantity = +largePotOrder.dataset.quantity - 1;
    letCalcOrder(largePotOrder, largeSum);
  }
});

largeDelete.addEventListener('click', (ev) => {
  largePotOrder.dataset.quantity = 0;
  letCalcOrder(largePotOrder, largeSum);
});

// small POT //
const smallPotOrder = document.querySelector('.basket__small--order');
const smallAdd = document.querySelector('.basket__small--add');
const smallRemove = document.querySelector('.basket__small--remove');
const smallDelete = document.querySelector('.basket__small--delete');
const smallPrice = document.querySelector('.basket__small--unit-price');
const smallSum = document.querySelector('.basket__small--total-price');

smallPotOrder.textContent = smallPotOrder.dataset.order;
smallPrice.textContent = '$ ' + smallPrice.dataset.price;
smallSum.textContent = '$ ' + 0;

smallAdd.addEventListener('click', (ev) => {
  smallPotOrder.dataset.quantity = +smallPotOrder.dataset.quantity + 1;
  letCalcOrder(smallPotOrder, smallSum);
});

smallRemove.addEventListener('click', (ev) => {
  if (smallPotOrder.dataset.quantity === '0') {
    smallSum.textContent = '$ ' + 0;
  } else {
    smallPotOrder.dataset.quantity = +smallPotOrder.dataset.quantity - 1;
    letCalcOrder(smallPotOrder, smallSum);
  }
});

smallDelete.addEventListener('click', (ev) => {
  smallPotOrder.dataset.quantity = 0;
  letCalcOrder(smallPotOrder, smallSum);
});

// checkout открытие и закрытие //
checkoutButton.addEventListener('click', (ev) => {
  if (!checkoutButton.hasAttribute('disabled')) {
    basket.classList.remove('dropdownPage--active');
    checkoutPage.classList.add('dropdownPage--active');
  }
});

checkoutClose.addEventListener('click', (ev) => {
  closingPage(checkoutPage);
});

// валидация заполнения форм checkot //
function inputValidation() {
  for (const input of [...inputsCheckout]) {
    input.classList.remove('checkout__input-form--invalid');

    if (!input.value) {
      input.classList.add('checkout__input-form--invalid');
    }
  }
}

const cardNumber = document.querySelector('.checkout__cardInfo--number');

cardNumber.addEventListener('keydown', function(e) {
  const value = this.value.replace(/\s+/g, '');
  const isBackspace = e.key === 'Backspace';

  if ((e.key.length === 1 && /^[^\d\s]+$/.test(e.key))
    || (!isBackspace && value.length === 16)) {
    e.preventDefault();

    return false;
  }

  this.value = value.split('').reverse().join('')
    .replace(/\B(?=(\d{4})+(?!\d))/g, ' ').split('').reverse().join('').trim();
});

let counter = 0;

checkoutSubmit.addEventListener('click', (ev) => {
  counter = 0;
  inputValidation();

  for (const input of [...inputsCheckout]) {
    if (input.classList.contains('checkout__input-form--invalid')) {
      counter++;
    }
  };

  if (counter === 0) {
    closingPage(checkoutPage);
  }
});

if (checkoutForm.addEventListener('submit', (ev) => {
  succesfullPayment.classList.add('succesfullPayment--active');
  wrapper.classList.add('page__wrapper--background');
})) {
  ;
}

succesfullClose.addEventListener('click', (ev) => {
  succesfullPayment.classList.remove('succesfullPayment--active');
  wrapper.classList.remove('page__wrapper--background');
});

materialsOpen.addEventListener('click', (ev) => {
  const open = ev.target;
  const i = open.dataset.open;

  aboutBobbiny[i - 1].classList.toggle('materials__about-bobbiny--active');
  open.classList.toggle('materials__open--active');
});

if (document.documentElement.scrollWidth < 768) {
  largePotOrder.textContent = 0;
  smallPotOrder.textContent = 0;
}
