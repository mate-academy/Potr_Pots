'use strict';

const toggler1 = document.querySelector('#toggler1');
const droptext1 = document.querySelector('#droptext1');

toggler1.addEventListener('click', () => {
  droptext1.classList.toggle('dropdown__droptext--hidden');
  toggler1.classList.toggle('dropdown__toggler--open');
});

const toggler2 = document.querySelector('#toggler2');
const droptext2 = document.querySelector('#droptext2');

toggler2.addEventListener('click', () => {
  droptext2.classList.toggle('dropdown__droptext--hidden');
  toggler2.classList.toggle('dropdown__toggler--open');
});

const toggler3 = document.querySelector('#toggler3');
const droptext3 = document.querySelector('#droptext3');

toggler3.addEventListener('click', () => {
  droptext3.classList.toggle('dropdown__droptext--hidden');
  toggler3.classList.toggle('dropdown__toggler--open');
});

const toggler4 = document.querySelector('#toggler4');
const droptext4 = document.querySelector('#droptext4');

toggler4.addEventListener('click', () => {
  droptext4.classList.toggle('dropdown__droptext--hidden');
  toggler4.classList.toggle('dropdown__toggler--open');
});

const toggler5 = document.querySelector('#toggler5');
const droptext5 = document.querySelector('#droptext5');

toggler5.addEventListener('click', () => {
  droptext5.classList.toggle('dropdown__droptext--hidden');
  toggler5.classList.toggle('dropdown__toggler--open');
});
