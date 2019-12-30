import { TemplateAnimals } from './TemplateAnimals.js';

export class ViewAnimals {
  constructor() {
    this.animalsWrapper = document.querySelector('.animals__wrapper');
    this.paginationWrapper = document.querySelector('.pagination__wrapper');
  }

  addListeners(handlers) {
    this.animalsWrapper.addEventListener('click', ev => {
      if (ev.target.className.includes('button__buy')) {
        handlers.handleClickBuyRemove(ev);
      }
      else if (ev.target.className.includes('button__details')) {
        handlers.handleClickDetails(ev);
      }
    });

    this.paginationWrapper.addEventListener('click', ev => {
      if (ev.target.parentNode.parentNode.className.includes('prev')) {
        handlers.handleClickPrevPage();
      }
      else if (ev.target.parentNode.parentNode.className.includes('next')) {
        handlers.handleClickNextPage();
      }
      else if (ev.target.className.includes('page-')) {
        handlers.handleClickPageNumber(ev);
      }
    });
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