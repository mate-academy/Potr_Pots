export function validation() {
  const formMessage = document.getElementById('formMessage');

  formMessage.addEventListener('submit', formSend);

  const inputFieldLen = document.getElementById('minLength');
  const inputFieldEmail = document.getElementById('email');

  const minLength = +inputFieldLen.getAttribute('data-minlength');

  inputFieldLen.addEventListener('input', function () {
      if (checkLength(this)) {
          inputFieldLen.classList.add('_correct');
      } else {
          inputFieldLen.classList.remove('_correct');
      }
  });

  inputFieldEmail.addEventListener('input', function () {
      if (!emailTest(this)) {
          inputFieldEmail.classList.add('_correct');
      } else {
          inputFieldEmail.classList.remove('_correct');
      }
  });

  async function formSend(e) {
      e.preventDefault();

      let error = formValidate(formMessage);

      if (!error) {

      }
  };

  function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');

      for (let i = 0; i < formReq.length; i++) {
          const input = formReq[i];
          formRemoveError(input);

          if (input.classList.contains('_min')) {
              if (!checkLength(input)) {
                  formAddError(input);
                  error++;
              }
          }

          if (input.classList.contains('_email')) {
              if (emailTest(input)) {
                  formAddError(input);
                  error++;
              }

              if (input.value.trim() === '') {
                  input.value = '';
              }

          } else {
              if (input.value.trim() === '') {
                  input.value = '';
                  formAddError(input);
                  error++;
              }
          }

          input.addEventListener('focus', function (event) {
              formRemoveError(input)
          });
      }

      return error;
  }

  function formAddError(input) {
      const previousElement = input.previousElementSibling;

      if (previousElement) {
          previousElement.classList.add('_error');
      }

      input.classList.add('_error');
  }

  function formRemoveError(input) {
      const previousElement = input.previousElementSibling;

      if (previousElement) {
          previousElement.classList.remove('_error');
      }

      input.classList.remove('_error');
  }


  function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  function checkLength(input) {
      return input.value.trim().length >= minLength;
  }
}

validation();
