'use strict';

// SLIDES

function toggleSlide1() {
  const x = document.getElementById('slide-1');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--1')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--1')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--1')
  .addEventListener('click', toggleSlide1);

function toggleSlide2() {
  const x = document.getElementById('slide-2');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--2')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--2')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--2')
  .addEventListener('click', toggleSlide2);

function toggleSlide3() {
  const x = document.getElementById('slide-3');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--3')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--3')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--3')
  .addEventListener('click', toggleSlide3);

function toggleSlide4() {
  const x = document.getElementById('slide-4');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--4')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--4')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--4')
  .addEventListener('click', toggleSlide4);

function toggleSlide5() {
  const x = document.getElementById('slide-5');

  if (x.style.display === 'none') {
    x.style.display = 'block';

    document.querySelector('.materials__image--5')
      .classList.add('materials__image--visible');
  } else {
    x.style.display = 'none';

    document.querySelector('.materials__image--5')
      .classList.remove('materials__image--visible');
  }
}

document.querySelector('.materials__image--5')
  .addEventListener('click', toggleSlide5);

// MODAL

const modal = document.getElementById('basket__modal');
const btn = document.getElementById('basket');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
  generateTable();
};

span.onclick = function() {
  modal.style.display = 'none';

  const table = document.getElementById('table');

  table.remove();
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';

    const table = document.getElementById('table');

    table.remove();
  }
};

// BASKET

const products = [{
  id: 1,
  name: 'Product 1',
  prize: 10,
},
{
  id: 2,
  name: 'Product 2',
  prize: 11,
}];

const basket = [];

const product1 = document.getElementById('product-1');
const product2 = document.getElementById('product-2');

product1.onclick = function() {
  const addedProduct = products[0];

  basket.push(addedProduct);

  setTimeout(showPopup1(), 1000);
};

product2.onclick = function() {
  const addedProduct = products[1];

  basket.push(addedProduct);

  showPopup2();
};

const modalBody = document.querySelector('.modal-body');

function generateTable() {
  const paragraph = document.createElement('p');

  paragraph.setAttribute('class', 'table__paragraph');

  const content = basket.length === 0
    ? document.createTextNode('Your basket is empty.')
    : basket.length === 1
      ? document.createTextNode(
        `You have ${basket.length} item in your basket.`
      )
      : document.createTextNode(
        `You have ${basket.length} items in your basket.`
      );

  paragraph.appendChild(content);

  const tbl = document.createElement('table');

  tbl.appendChild(paragraph);

  const headName = document.createElement('td');
  const name = document.createTextNode('Name');
  const headPrize = document.createElement('td');
  const prize = document.createTextNode('Prize');
  const headRow = document.createElement('tr');

  headName.appendChild(name);
  headPrize.appendChild(prize);

  headRow.appendChild(headName);
  headRow.appendChild(headPrize);

  tbl.setAttribute('id', 'table');

  const tblBody = document.createElement('tbody');
  let countPrize = 0;

  if (basket.length > 0) {
    tblBody.appendChild(headRow);
  }

  for (let i = 0; i < basket.length; i++) {
    const row = document.createElement('tr');
    const keys = Object.entries(basket[i]);

    countPrize += basket[i].prize;

    for (let j = 1; j < keys.length; j++) {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(`${keys[j][1]}`);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  const totalPrizeRow = document.createElement('tr');
  const totalPrizeData = document.createElement('td');
  const totalPrize = document.createTextNode(`Total prize: ${countPrize} $`);

  totalPrizeData.setAttribute('class', 'table__total');

  totalPrizeData.appendChild(totalPrize);
  totalPrizeRow.appendChild(totalPrizeData);
  tblBody.appendChild(totalPrizeRow);
  tbl.appendChild(tblBody);
  modalBody.appendChild(tbl);
}

// POPUP
const popup1 = document.getElementById('added-product-1');
const popup2 = document.getElementById('added-product-2');

function showPopup1() {
  popup1.classList.add('show');

  setTimeout(function() {
    popup1.classList.remove('show');
  }, 1200);
};

function showPopup2() {
  popup2.classList.add('show');

  setTimeout(function() {
    popup2.classList.remove('show');
  }, 1200);
};
