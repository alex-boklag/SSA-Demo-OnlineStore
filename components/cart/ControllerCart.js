import { ViewCart } from './ViewCart.js';

export class ControllerCart {
  constructor({ subscribe, publish }) {
    this.publish = publish;
    this.view = new ViewCart();
    this.view.renderCartIcon();
    this.listeners = {
      handleCartIconClick: this.handleCartIconClick.bind(this),
      handleRemoveClick: this.handleRemoveClick.bind(this),
      handleClearClick: this.handleClearClick.bind(this),
    };
    this.view.addListeners(this.listeners);
  }

  handleCartIconClick(ev) {
    if (ev.target.parentNode.className && ev.target.parentNode.className.includes('cart-icon')) {
      this.view.renderCart();
    }
  }

  handleRemoveClick(ev) {
    const animalId = Number(ev.target.parentNode.parentNode.dataset.id);

    localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
      if (animal.id === animalId) {
        animal.buy = false;
      }
      return animal;
    }));

    this.publish('data-changed', JSON.parse(localStorage.animalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize)));
    this.view.renderCart();
  }

  handleClearClick(ev) {
    if (ev.target.className.includes('button__clear')) {
      localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
        animal.buy = false;
        return animal;
      }));
      this.view.renderCart();

      this.publish('data-changed', JSON.parse(localStorage.animalsList)
        .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize)));

    }
  }
}