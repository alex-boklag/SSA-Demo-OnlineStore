import { TemplateSearch} from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.searchWrapper = document.querySelector('.search__wrapper');
  }

  addListeners(handleChangeSearch) {
    document.querySelector('.uk-search-input').addEventListener('keyup', handleChangeSearch);
  }

  renderSearch() {
    this.searchWrapper.insertAdjacentHTML('afterbegin', TemplateSearch.getSearchTemplate());
  }
}