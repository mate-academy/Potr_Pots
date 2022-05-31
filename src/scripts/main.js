'use strict';

function submitForm() {
  const frm = document.getElementsByName('contact-form')[0];

  frm.submit();
  frm.reset();
}

const btn = document.getElementsByClassName('contact__button');

btn.addEventListener('click', submitForm());
