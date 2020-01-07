import { TemplateCart } from './TemplateCart.js';

export class ViewCart {
  constructor() {
    this.root = document.querySelector('.root');
    this.cartWrapper = document.querySelector('.cart__wrapper');
    this.cartWrapper.innerHTML = TemplateCart.getCartTemplate();
  }

  addListeners(handlers) {
    this.root.addEventListener('click', ev => handlers.handleCartIconClick(ev));

    this.cartWrapper.addEventListener('click', ev => {
      if (ev.target.classList.contains('button__remove')) {
        handlers.handleRemoveClick(ev);
      }
      else if (ev.target.classList.contains('button__confirm')) {
        handlers.handleConfirmClick();
      }
      else if (ev.target.classList.contains('button__clear')) {
        handlers.handleClearClick();
      }
    });

    this.cartWrapper.addEventListener('submit', ev => {
      ev.preventDefault();
      handlers.handleSendClick(ev);
    });
  }

  renderCartIcon() {
    this.root.insertAdjacentHTML('beforeend', TemplateCart.getCartIconTemplate());
  }

  changeCartCounter(value) {
    document.querySelector('.cart-button').dataset.after = value;
  }

  renderCart(animalsToBuy, totalPrice) {
    this.cartWrapper.innerHTML = TemplateCart.getCartTemplate();
    this.cartBody = document.querySelector('.cart-body');

    let cartBody = '';

    if (animalsToBuy.length) {
      cartBody = animalsToBuy.map(animal => {
        return TemplateCart.getCartItemTemplate(animal);
      }).join('')
      cartBody += TemplateCart.getTotalPriceTemplate(totalPrice);
    }
    else {
      cartBody = '<p>The cart is empty :( </p>';
    }

    this.cartBody.innerHTML = cartBody;
  }

  renderCartUserInfo() {
    this.cartWrapper.innerHTML = TemplateCart.getUserInfoTemplate();
  }

  closeCart() {
    UIkit.modal(this.cartWrapper).hide();
  }

  showSuccessMessage() {
    UIkit.modal.alert('Congratulations, your order was sent! Our manager will phone you during the day.');
  }
}