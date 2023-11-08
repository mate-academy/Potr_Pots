'use strict';

window.onresize = function() {
  if (window.screen.width < 768) {
    [...document.getElementsByClassName('cardinfo')].forEach(el => {
      el.style['display'] = 'none';
    });
  } else {
    [...document.getElementsByClassName('circle-button')].forEach(el => {
      el.style['background-color'] = '#eb5757';
      el.style['opacity'] = '100%';

      const symbolVerical = el.childNodes.item(1);

      symbolVerical.style['display'] = 'block';
    });
  }
};

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
