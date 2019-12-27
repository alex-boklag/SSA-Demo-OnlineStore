import { TemplateAnimals } from './TemplateAnimals.js';

export class ViewAnimals {
  constructor() {
    this.root = document.querySelector('.root');
    this.animalsWrapper = document.querySelector('.animals__wrapper');
    this.paginationWrapper = document.querySelector('.pagination__wrapper');
  }

  addListeners(handlers) {
    this.root.addEventListener('click', ev => {
      if (ev.target.parentNode.parentNode.className.includes('prev')) {
        handlers.handleClickPrevPage();
      }
      else if (ev.target.parentNode.parentNode.className.includes('next')) {
        handlers.handleClickNextPage();
      }
      else if (ev.target.className.includes('page-')) {
        const pageNumber = Number(ev.target.className.split('page-')[1]);
        handlers.handleClickPageNumber(pageNumber);
      }
      else if (ev.target.className.includes('button__buy')) {
        const animalId = Number(ev.target.parentNode.parentNode.dataset.id);
        handlers.handleClickBuy(animalId);
      }
      else if (ev.target.className.includes('button__details')) {
        const animalId = Number(ev.target.parentNode.parentNode.dataset.id);
        handlers.handleClickDetails(animalId);
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