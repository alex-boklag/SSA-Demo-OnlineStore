import { ModelSearch } from './ModelSearch.js';
import { ViewSearch } from './ViewSearch.js';

export class ControllerSearch {
  constructor({ subscribe, unsubscribe, publish }) {
    this.publish = publish;
    this.model = new ModelSearch();
    this.view = new ViewSearch(subscribe);
    this.view.renderSearch();
    this.view.addListeners(this.handleChangeSearch.bind(this));
  }

  handleChangeSearch(ev) {
    const searchValue = ev.target.value.toLowerCase().trim();

    let animalsList = JSON.parse(localStorage.animalsList);
    localStorage.filteredAnimalsList = JSON.stringify(animalsList
      .filter(animal => animal.breed.toLowerCase().includes(searchValue)));
    
    localStorage.totalPages = Math.ceil(JSON.parse(localStorage.filteredAnimalsList).length / localStorage.pageSize);
    localStorage.offset = 0;

    this.publish('search-changed', JSON
      .parse(localStorage.filteredAnimalsList)
      .slice(localStorage.offset, Number(localStorage.offset) + Number(localStorage.pageSize))
    );
  }
}