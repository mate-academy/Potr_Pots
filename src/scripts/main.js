import {
  headerToggleBtn,
  menuCloseBtn,
  overlay,
  shoppingBagIcon,
  buyBtn,
  shoppingBagCloseBtn,
  checkoutShowBtn,
  checkoutCloseBtn,
  thanksShowBtn,
  thanksCloseBtn,
} from './custom/consts';
import { showMenu, hideMenu } from './custom/burgerMenu';
import { shoppingBagShow, shoppingBagHide } from './custom/shoppingBag';
import { checkoutModalShow, checkoutModalHide } from './custom/checkout';
import { thanksModalShow, thanksModalHide } from './custom/thanks';

headerToggleBtn.addEventListener('click', showMenu);
overlay.addEventListener('click', hideMenu);
menuCloseBtn.addEventListener('click', hideMenu);

shoppingBagIcon.addEventListener('click', shoppingBagShow);
shoppingBagCloseBtn.addEventListener('click', shoppingBagHide);
overlay.addEventListener('click', shoppingBagHide);

buyBtn.forEach(btn => {
  btn.addEventListener('click', shoppingBagShow);
});

checkoutShowBtn.addEventListener('click', checkoutModalShow);
checkoutCloseBtn.addEventListener('click', checkoutModalHide);
overlay.addEventListener('click', checkoutModalHide);

thanksShowBtn.addEventListener('click', e => {
  e.preventDefault();
});

thanksShowBtn.addEventListener('click', thanksModalShow);
thanksCloseBtn.addEventListener('click', thanksModalHide);
overlay.addEventListener('click', thanksModalHide);
