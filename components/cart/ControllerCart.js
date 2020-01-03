import { ViewCart } from './ViewCart.js';

export class ControllerCart {
  constructor({ publish }) {
    this.publish = publish;
    this.view = new ViewCart();
    this.view.renderCartIcon();
    this.listeners = {
      handleCartIconClick: this.handleCartIconClick.bind(this),
      handleRemoveClick: this.handleRemoveClick.bind(this),
      handleConfirmClick: this.handleConfirmClick.bind(this),
      handleClearClick: this.handleClearClick.bind(this),
      handleSendClick: this.handleSendClick.bind(this),
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

  handleConfirmClick() {
    const animalsNumber = JSON.parse(localStorage.animalsList).filter(animal => animal.buy === true).length;
    if (animalsNumber > 0) {
      this.view.renderCartUserInfo();
    } 
  }

  handleClearClick() {
    localStorage.animalsList = JSON.stringify(JSON.parse(localStorage.animalsList).map(animal => {
      animal.buy = false;
      return animal;
    }));
    this.view.renderCart();

    this.publish('data-changed', JSON.parse(localStorage.animalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize)));
  }

  handleSendClick(ev) {
    if (ev.target.className.includes('user-info-form')) {
      const order = {
        client: {
          name: ev.target.elements[0].value,
          telephone: ev.target.elements[1].value,
          address: ev.target.elements[2].value,
          email: ev.target.elements[3].value,
          notes: ev.target.elements[4].value
        },
        animals: JSON.parse(localStorage.animalsList).filter(animal => animal.buy === true),
      }

      fetch(`https://api.telegram.org/bot1038146133:AAGVbTT2H_gG7nTGo2z8sJiFAKXItf_DZXM/sendMessage?chat_id=258111327&text=${JSON.stringify(order)}`)
        .then(d => d.json())
        .then(data => console.log(data));
    }
  }
}