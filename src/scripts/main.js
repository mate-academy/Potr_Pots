'use strict';

const menu = document.querySelector('#menu');
const navBasketCount = document.querySelector('.nav__basket-count');
const shoppingBagModal = document.querySelector('.shopping-bag__modal');

const shoppingBagBtnList = document.querySelectorAll('.shopping-bag');
const closeshoppingBagBtn = document.querySelector(
  '.shopping-bag__header-close');

const largeMinusList = document.querySelectorAll('.large-minus');
const largeCountList = document.querySelectorAll('.large-count');
const largePlusList = document.querySelectorAll('.large-plus');

const smallMinusList = document.querySelectorAll('.small-minus');
const smallCountList = document.querySelectorAll('.small-count');
const smallPlusList = document.querySelectorAll('.small-plus');

const largeUnitPrice = document.querySelector('.large-unit-price');
const largeTotalPriceList = document.querySelectorAll('.large-total-price');

const smallUnitPrice = document.querySelector('.small-unit-price');
const smallTotalPriceList = document.querySelectorAll('.small-total-price');

const laregeResetBtn = document.querySelector('.large-reset');
const smallResetBtn = document.querySelector('.small-reset');

const totalPriceList = document.querySelectorAll('.total-price');
const checkoutBtnList = document.querySelectorAll('.shopping-bag__btn');

const checkoutModal = document.querySelector('.checkout__modal');
const closecheckoutBtn = document.querySelector('.checkout__header-close');
const checkoutForm = document.querySelector('.checkout-form');
const amount = document.querySelector('.checkout-form__card-amount-price');
const checkoutFormInputList = document.querySelectorAll(
  '.checkout-form__input');
const submitCheckoutBtn = document.querySelector('.checkout-form__submit-btn');

const congratulationModal = document.querySelector('.congratulation__modal');
const closeCongratBtn = document.querySelector('.congratulation__header-close');

let largeTotalPrice = getNumber(
  document.querySelector('.large-total-price').innerText
);
let smallTotalPrice = getNumber(
  document.querySelector('.small-total-price').innerText
);
let totalPrice = largeTotalPrice + smallTotalPrice;

let largeCountMobile = +largeCountList[0].innerText;
let smallCountMobile = +smallCountList[0].innerText;

function getNumber(string) {
  let str = '';

  for (let i = 0; i <= string.length; i++) {
    if (string[i] === ',') {
      str += '.';
    }

    if (!isNaN(+string[i])) {
      str += string[i];
    }
  }

  return +str;
}

function getString(num) {
  const str = num.toFixed(2);

  let newStr = '$ ';

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === '.') {
      newStr += ',';
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function getStringAmount(num) {
  const str = num.toFixed(2);

  let newStr = 'USD ';

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === '.') {
      newStr += ',';
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function getTotalPricePerUnit(count, index, unitPrice, sizetotalPriceList) {
  const totalPricePerPositionNum = parseInt(count[index].innerText)
        * getNumber(unitPrice.innerText);

  if (unitPrice.closest('.large-unit-price')) {
    largeTotalPrice = totalPricePerPositionNum;
  }

  if (unitPrice.closest('.small-unit-price')) {
    smallTotalPrice = totalPricePerPositionNum;
  }

  const totalPricePerPositionStr = getString(totalPricePerPositionNum);

  sizetotalPriceList[index].innerText = totalPricePerPositionStr;
}

function getTotalPrice(index) {
  const sum = largeTotalPrice + smallTotalPrice;

  totalPrice = sum;

  totalPriceList[index].innerText = getString(sum);
}

function getTotalCount(count1, count2) {
  const sum = count1 + count2;

  navBasketCount.innerText = sum;
}

// scroll disable

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// TAB disable

menu.addEventListener('keydown', (event) => {
  if (event.keyCode === 9) {
    event.preventDefault();
  }
});

// open shopping-bag__modal

for (const shoppingBagBtn of shoppingBagBtnList) {
  shoppingBagBtn.addEventListener('click', () => {
    shoppingBagModal.classList.add('shopping-bag__modal-open');

    if (shoppingBagModal.classList.contains('shopping-bag__modal-open')) {
      document.body.classList.add('page__body--with-modal');
    }
  });
}

// close shopping-bag__modal

closeshoppingBagBtn.addEventListener('click', () => {
  shoppingBagModal.classList.remove('shopping-bag__modal-open');
  document.body.classList.remove('page__body--with-modal');
});

// add and remove count

for (let i = 0; i <= largeMinusList.length - 1; i++) {
  largeMinusList[i].addEventListener('click', () => {
    if (largeCountList[i].innerText > 0) {
      largeCountList[i].innerText = +largeCountList[i].innerText - 1;

      if (i === 0) {
        largeCountMobile = +largeCountList[i].innerText;
      }

      getTotalCount(largeCountMobile, smallCountMobile);

      getTotalPricePerUnit(
        largeCountList, i, largeUnitPrice, largeTotalPriceList
      );
      getTotalPrice(i);
    }
  });
}

for (let i = 0; i <= largePlusList.length - 1; i++) {
  largePlusList[i].addEventListener('click', () => {
    if (largeCountList[i].innerText < 20) {
      largeCountList[i].innerText = +largeCountList[i].innerText + 1;

      if (i === 0) {
        largeCountMobile = +largeCountList[i].innerText;
      }

      getTotalCount(largeCountMobile, smallCountMobile);

      getTotalPricePerUnit(
        largeCountList, i, largeUnitPrice, largeTotalPriceList
      );
      getTotalPrice(i);
    }
  });
}

for (let i = 0; i <= smallMinusList.length - 1; i++) {
  smallMinusList[i].addEventListener('click', () => {
    if (smallCountList[i].innerText > 0) {
      smallCountList[i].innerText = +smallCountList[i].innerText - 1;

      if (i === 0) {
        smallCountMobile = +smallCountList[i].innerText;
      }

      getTotalCount(largeCountMobile, smallCountMobile);

      getTotalPricePerUnit(
        smallCountList, i, smallUnitPrice, smallTotalPriceList
      );
      getTotalPrice(i);
    }
  });
}

for (let i = 0; i <= smallPlusList.length - 1; i++) {
  smallPlusList[i].addEventListener('click', () => {
    if (smallCountList[i].innerText < 20) {
      smallCountList[i].innerText = +smallCountList[i].innerText + 1;

      if (i === 0) {
        smallCountMobile = +smallCountList[i].innerText;
      }

      getTotalCount(largeCountMobile, smallCountMobile);

      getTotalPricePerUnit(
        smallCountList, i, smallUnitPrice, smallTotalPriceList
      );
      getTotalPrice(i);
    }
  });
}

// reset count

laregeResetBtn.addEventListener('click', () => {
  for (const largeCount of largeCountList) {
    if (largeCount.closest('.shopping-bag__table-tablet-desktop')) {
      largeCount.innerText = '0';

      largeTotalPriceList[1].innerText = '$ 0,00';
      largeTotalPrice = 0;
      getTotalPrice(1);
    }
  }
});

smallResetBtn.addEventListener('click', () => {
  for (const smallCount of smallCountList) {
    if (smallCount.closest('.shopping-bag__table-tablet-desktop')) {
      smallCount.innerText = '0';

      smallTotalPriceList[1].innerText = '$ 0,00';
      smallTotalPrice = 0;
      getTotalPrice(1);
    }
  }
});

// open checkout_modal and close shopping-bag__modal

for (const checkoutBtn of checkoutBtnList) {
  checkoutBtn.addEventListener('click', () => {
    shoppingBagModal.classList.remove('shopping-bag__modal-open');
    checkoutModal.classList.add('checkout__modal-open');

    amount.innerText = getStringAmount(totalPrice);
  });
}

// close checkout__modal

closecheckoutBtn.addEventListener('click', () => {
  checkoutModal.classList.remove('checkout__modal-open');
  document.body.classList.remove('page__body--with-modal');

  for (const checkoutFormInput of checkoutFormInputList) {
    checkoutFormInput.classList.remove('checkout-form__input-empty');
  }
});

// open congratulation_modal and close checkout__modal

submitCheckoutBtn.addEventListener('click', (event) => {
  let checkSum = checkoutFormInputList.length;

  for (const checkoutFormInput of checkoutFormInputList) {
    if (checkoutFormInput.value !== '') {
      checkoutFormInput.classList.remove('checkout-form__input-empty');
      checkSum--;
    } else {
      checkoutFormInput.classList.add('checkout-form__input-empty');
    }
  }

  if (checkSum === 0) {
    checkoutModal.classList.remove('checkout__modal-open');
    congratulationModal.classList.add('congratulation__modal-open');

    for (const checkoutFormInput of checkoutFormInputList) {
      checkoutFormInput.value = '';
    }
  }
});

// add/remove .checkout-form__input-empty if input empty/filled

for (const checkoutFormInput of checkoutFormInputList) {
  checkoutFormInput.addEventListener('input', () => {
    if (checkoutFormInput.value !== '') {
      checkoutFormInput.classList.remove('checkout-form__input-empty');
    } else {
      checkoutFormInput.classList.add('checkout-form__input-empty');
    }
  });
}

// checkoutForm preventDefault

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

// close congratulation__modal

closeCongratBtn.addEventListener('click', () => {
  congratulationModal.classList.remove('congratulation__modal-open');
  document.body.classList.remove('page__body--with-modal');
});
