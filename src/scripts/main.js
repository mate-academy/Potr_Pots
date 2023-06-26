'use strict';

// This function stop the scrolling of the page when the menu is opened

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#Menu') {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});


//The toggle modals

const btn1 = document.querySelector('.Materials__circle--1');
const card1 = document.querySelector('.Materials__mod--1');

btn1.addEventListener("click", () => {

  card1.classList.toggle('Materials__mod--show');
 
  btn1.classList.toggle('Materials__circle--show');
});

const btn2 = document.querySelector('.Materials__circle--2');
const card2 = document.querySelector('.Materials__mod--2');

btn2.addEventListener("click", () => {

  card2.classList.toggle('Materials__mod--show');
 
  btn2.classList.toggle('Materials__circle--show');
});

const btn3 = document.querySelector('.Materials__circle--3');
const card3 = document.querySelector('.Materials__mod--3');

btn3.addEventListener("click", () => {

  card3.classList.toggle('Materials__mod--show');
 
  btn3.classList.toggle('Materials__circle--show');
});

const btn4 = document.querySelector('.Materials__circle--4');
const card4 = document.querySelector('.Materials__mod--4');

btn4.addEventListener("click", () => {

  card4.classList.toggle('Materials__mod--show');
 
  btn4.classList.toggle('Materials__circle--show');
});

const btn5 = document.querySelector('.Materials__circle--5');
const card5 = document.querySelector('.Materials__mod--5');

btn5.addEventListener("click", () => {

  card5.classList.toggle('Materials__mod--show');
 
  btn5.classList.toggle('Materials__circle--show');
});

// This function resets the form

const form = document.getElementById("myform");

form.addEventListener("submit",(event)=>{
  event.preventDefault();
  form.reset();
})