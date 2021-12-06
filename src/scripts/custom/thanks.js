import { thanksModal, checkoutModal, overlay } from './consts';

export function thanksModalShow() {
  thanksModal.classList.add('thanksModal_active');
  checkoutModal.classList.remove('checkoutModal_active');
}

export function thanksModalHide() {
  thanksModal.classList.remove('thanksModal_active');
  overlay.classList.remove('overlay_active');
}
