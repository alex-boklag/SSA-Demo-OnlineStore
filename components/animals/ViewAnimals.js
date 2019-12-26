import { TemplateAnimals } from './TemplateAnimals.js';

export class ViewAnimals {
  constructor(subscribe) {
    this.root = document.querySelector('.root');
    this.animalsWrapper = document.querySelector('.animals__wrapper');
    this.paginationWrapper = document.querySelector('.pagination__wrapper');
    subscribe('animals-data-updated', this.renderAnimalCards.bind(this));
    subscribe('search-changed', this.renderAnimalCards.bind(this));
    subscribe('total-pages-changed', this.renderPagination.bind(this));
  }

  addListeners(handlers) {
    const btnPrevPage = document.querySelector('.prev-page');
    const btnNextPage = document.querySelector('.next-page');
    const btnPageNumbers = document.querySelector('.uk-pagination');

    btnPrevPage.addEventListener('click', handlers.handleClickPrevPage);
    btnNextPage.addEventListener('click', handlers.handleClickNextPage);
    btnPageNumbers.addEventListener('click', handlers.handleClickPageNumber);
  }

  renderAnimalCards(animalsList) {
    const animalCards = animalsList
      .map(animal => this.prepareAnimalCard(animal))
      .join('');
    this.animalsWrapper.innerHTML = animalCards;
  }

  prepareAnimalCard(animal) {
    return TemplateAnimals.getAnimalsTemplate(animal);
  }

  renderPagination(totalPages) {
    this.paginationWrapper.innerHTML = TemplateAnimals.getPagination();
    for (let i = 1; i <= totalPages; i += 1) {
      document.querySelector('.next-page').insertAdjacentHTML('beforebegin', `<li class="page-${i}">${i}</li>`)
    }
  }
}