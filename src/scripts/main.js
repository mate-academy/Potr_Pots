'use strict';

window.onload = function() {
  [...document.getElementsByClassName('circle-button')].forEach(el => {
    el.addEventListener('click', function() {
      const currentButton = this;

      const symbolVerical = currentButton.childNodes.item(1);

      currentButton.classList.forEach(function(className) {
        if (!className.indexOf('circle-button--')) {
          const numberOfButton = className.substr(className.length - 1);

          window.console.log(numberOfButton);

          const cardInfo = document
            .getElementsByClassName('cardinfo--' + numberOfButton).item(0);

          if (cardInfo.style['display'] === 'block') {
            cardInfo.style['display'] = 'none';
            currentButton.style['background-color'] = '#eb5757';
            currentButton.style['opacity'] = '100%';
            symbolVerical.style['display'] = 'block';
          } else {
            cardInfo.style['display'] = 'block';
            currentButton.style['background-color'] = '#242323';
            currentButton.style['opacity'] = '75%';
            symbolVerical.style['display'] = 'none';
          }

          window.console.log(cardInfo);

          return false;
        }
      });
    });
  });
};
