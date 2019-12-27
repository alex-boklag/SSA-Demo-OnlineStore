import { TemplateAnimals } from './TemplateAnimals.js';

export class ViewAnimals {
  constructor(subscribe) {
    this.subscribe = subscribe;
    this.root = document.querySelector('.root');
    this.animalsWrapper = document.querySelector('.animals__wrapper');
    this.paginationWrapper = document.querySelector('.pagination__wrapper');
    subscribe('animals-data-updated', this.renderAnimalCards.bind(this));
    subscribe('search-changed', this.renderAnimalCards.bind(this));
  }

  addListeners(handlers) {
    document.querySelector('.button__details').addEventListener('click', handlers.handleDetailsClick);
    document.querySelector('.prev-page').addEventListener('click', handlers.handleClickPrevPage);
    document.querySelector('.next-page').addEventListener('click', handlers.handleClickNextPage);
    document.querySelector('.uk-pagination').addEventListener('click', handlers.handleClickPageNumber);
  }

  renderAnimalCards(animalsList) {
    const animalCards = animalsList
      .map(animal => this.prepareAnimalCard(animal))
      .join('');
    this.animalsWrapper.innerHTML = animalCards;

    this.paginationWrapper.innerHTML = TemplateAnimals.getPagination();
    for (let i = 1; i <= localStorage.totalPages; i += 1) {
      document.querySelector('.next-page').insertAdjacentHTML('beforebegin', `<li class="page-${i}">${i}</li>`)
    }
  }

  prepareAnimalCard(animal) {
    return TemplateAnimals.getAnimalsTemplate(animal);
  }
}