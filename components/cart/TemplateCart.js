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
          <button class="button__confirm uk-button uk-border-rounded" type="button">Confirm</button>
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
              <button class="button__remove uk-button uk-button-small uk-width-3-5 uk-border-rounded" type="button">Remove</button>
          </div>
  </div>`;
  }
}