export class TemplateAnimals {
  static getAnimalsTemplate({ id, image, price, breed, gender, birth_date, weight, buy, species }) {
    const months = Math.floor((Date.now() - new Date(birth_date)) / 2592000000);

    return `<div class="uk-card uk-card-default uk-card-hover uk-margin-top uk-margin-bottom" data-id="${id}" data-species="${species}">
      <div class="uk-card-media-top">
        <img src="${image}" alt="${breed}">
      </div>
      <div class="uk-card-header uk-padding-small">
        <p class="uk-text-large uk-text-bold uk-text-center uk-margin-small">${breed}</p>
        <p class="uk-text-bold uk-text-center uk-margin-small">$${price}</p>
      </div>
      <div class="uk-card-body uk-text-center uk-padding-small">
        <p class="uk-text-bold">
          <span class="uk-text-small">${gender} / ${months} months / ${weight} kg</span>
        </p>
      </div>
      <div class="uk-card-footer uk-text-center uk-padding-small uk-text-bold">
        <button class="uk-button button__buy__remove ${(buy === false) ? "button-success":"button-danger"} uk-border-rounded uk-width-2-5" type="button">    
            ${(buy === false) ? "Buy" : "Remove"}
        </button>
        <button class="uk-button button__details uk-border-rounded uk-width-2-5" type="button" uk-toggle="target: #modal-details">Details</button>
      </div>
    </div>`;
  }

  static getPagination() {
    return `<ul class="uk-pagination uk-flex-center uk-flex-middle" uk-margin>
      <li class="prev-page"><span class="prev" uk-pagination-previous></span></li>
      <li class="next-page"><span class="next" uk-pagination-next></span></li>
    </ul>`;
  }
}