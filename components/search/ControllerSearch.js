import { ViewSearch } from './ViewSearch.js';

export class ControllerSearch {
  constructor({ subscribe, publish }) {
    this.publish = publish;
    this.view = new ViewSearch(subscribe);
    this.view.renderSearchAndFilters();
    this.view.addListeners(this.handleChangeSearch.bind(this), this.handleChangeFilter.bind(this));
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

    let animalsList = JSON.parse(localStorage.animalsList);
    localStorage.filteredAnimalsList = JSON.stringify(animalsList
      .filter(animal => {
        console.log(filter, animal.species.toLowerCase());
        return filter === animal.species.toLowerCase();
      }));
    
    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.filteredAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;

    this.publish('filter-changed', JSON
      .parse(localStorage.filteredAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize))
    );
  }
}