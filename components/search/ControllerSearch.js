import { ViewSearch } from './ViewSearch.js';

export class ControllerSearch {
  constructor({ subscribe, publish }) {
    this.publish = publish;
    this.view = new ViewSearch(subscribe);
    this.view.renderSearchFiltersSort();
    this.listeners = {
      handleChangeSearch: this.handleChangeSearch.bind(this),
      handleChangeFilter: this.handleChangeFilter.bind(this),
      handleChangeSort: this.handleChangeSort.bind(this)
    }
    this.view.addListeners(this.listeners);
  }

  handleChangeSearch(ev) {
    const search = ev.target.value.toLowerCase().trim();

    let animalsList = JSON.parse(localStorage.animalsList);
    localStorage.filteredAnimalsList = JSON.stringify(animalsList
      .filter(animal => animal.breed.toLowerCase().includes(search)));

    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.filteredAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;

    this.publish('search-changed', JSON
      .parse(localStorage.filteredAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize))
    );
  }

  handleChangeFilter(ev) {
    const filter = ev.target.dataset.value.toLowerCase();

    localStorage.filteredAnimalsList = localStorage.animalsList;

    if (filter !== 'all') {
      let animalsList = JSON.parse(localStorage.animalsList);
      localStorage.filteredAnimalsList = JSON.stringify(animalsList
        .filter(animal => {
          return filter === animal.species.toLowerCase();
        }));
    }

    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.filteredAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;

    this.publish('filter-changed', JSON
      .parse(localStorage.filteredAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize))
    );
  }

  handleChangeSort(ev) {
    const sortBy = ev.target.className.split(' ')[1];
    let animalsList = JSON.parse(localStorage.filteredAnimalsList);

    switch (sortBy) {
      case "priceDesc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a2.price - a1.price));
        break;
      case "priceAsc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a1.price - a2.price));
        break;
      case "ageDesc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a1.birth_date - a2.birth_date));
        break;
      case "ageAsc":
        localStorage.filteredAnimalsList = JSON.stringify(animalsList.sort((a1, a2) => a2.birth_date - a1.birth_date));
        break;
      default:
        break;
    }

    this.publish('sort-changed', JSON
      .parse(localStorage.filteredAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize))
    );
  }
}