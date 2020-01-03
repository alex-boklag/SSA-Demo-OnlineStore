export class TemplateCart {
  static getCartButtonTemplate() {
    return `<button class="cart-button uk-button uk-button-default uk-position-top-right uk-position-small" type="button" uk-toggle="target: #modal-cart">
      <span class="cart-icon" uk-icon="cart" ratio="2"></span>
    </button>`;
  }

  static getCartTemplate() {
    return `<div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-header">
          <h2 class="uk-modal-title">Animals cart</h2>
      </div>
      <div class="cart-body uk-modal-body uk-height-large uk-text-large" uk-overflow-auto></div>
      <div class="uk-modal-footer uk-text-right uk-text-bold">
          <button class="button__confirm button-success uk-button uk-border-rounded" type="button">Confirm</button>
          <button class="button__clear uk-button uk-border-rounded" type="button">Clear</button>
      </div>
  </div>`;
  }

  static getCartItemTemplate({ id, image, price, breed, gender, birth_date, weight }) {
    const months = Math.floor((Date.now() - new Date(birth_date)) / 2592000000);

    return `<div class="animal-item uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-small" data-id="${id}" uk-grid>
          <div class="uk-card-media-left uk-cover-container uk-border-rounded">
              <img class="animal-image" src="${image}" alt="" uk-cover>
              <canvas width="600" height="200"></canvas>
          </div>
          <div class="uk-card-body uk-flex-row uk-text-bold">
              <h2 class="uk-card-title uk-margin-remove-bottom">${breed}</h3>
              <p class="uk-margin-remove-top uk-margin-remove-bottom">
                <span class="uk-text-bold uk-text-center">$${price}</span><br>
                <span class="uk-text-small">${gender} / ${months} months / ${weight} kg</span>
              </p>
              <button class="button__remove button-danger uk-button uk-button-small uk-width-3-5 uk-border-rounded" type="button">Remove</button>
          </div>
  </div>`;
  }

  static getUserInfoTemlate() {
    return `<div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>
      <div class="uk-modal-header">
        <h2 class="uk-modal-title">Your contact info</h2>
      </div>
      <div class="cart-body uk-modal-body uk-height-large uk-text-large" uk-overflow-auto>
        <form id="user-info-form" class="user-info-form uk-grid-small" uk-grid>
          <div class="uk-width-1-2@s">
            <label for="name">Name <span class="required">*</span></label>
            <input id="name" class="uk-input" type="text" placeholder="Alex" required pattern="[A-Z][a-z]+">
          </div>
          <div class="uk-width-1-2@s">
            <label for="phone">Phone number <span class="required">*</span></label>
            <input id="phone" class="uk-input" type="tel" placeholder="38-000-000-00-00" required
              pattern="38-0[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}">
          </div>
          <div class="uk-width-1-2@s">
            <label for="address">Address <span class="required">*</span></label>
            <input id="address" class="uk-input" type="text" placeholder="Kalinova 1, 28" required>
          </div>
          <div class="uk-width-1-2@s">
            <label for="email">Email <span class="required">*</span></label>
            <input id="email" class="uk-input" type="address" placeholder="alex@gmail.com" required
              pattern="[A-Za-z][A-Za-z0-9.]+@[a-z]+.[a-z]+">
          </div>
          <div class="uk-width-1-1">
            <label for="notes">Notes</label>
            <textarea id="notes" class="uk-textarea"></textarea>
          </div>
        </form>
      </div>
      <div class="uk-modal-footer uk-text-right uk-text-bold">
        <button class="uk-button button-success uk-border-rounded" type="submit" form="user-info-form">Send</button>
      </div>
    </div>`;
  }

  static getTemplateOrder({ name, phone, email, address, notes }, animals) {
    return `
    *Name:* ${name.value}
    *Phone:* ${phone.value}
    *Email:* ${email.value}
    *Address:* ${address.value}
    ${notes ? `*Notes:* ${notes.value}` : ''}
    *Animals id to buy:* ${animals.map(animal => animal.id)}`;
  }
}