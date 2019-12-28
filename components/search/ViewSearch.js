import { TemplateSearch} from './TemplateSearch.js';

export class ViewSearch {
  constructor() {
    this.searchWrapper = document.querySelector('.search__wrapper');
    this.filtersWrapper = document.querySelector('.filters__wrapper');
  }

  addListeners(handleChangeSearch, handleChangeFilter) {
    document.querySelector('.uk-search-input').addEventListener('keyup', handleChangeSearch);
    document.querySelector('.filters__wrapper').addEventListener('click', handleChangeFilter);
  }

  renderSearchAndFilters() {
    this.searchWrapper.insertAdjacentHTML('afterbegin', TemplateSearch.getSearchTemplate());
    this.filtersWrapper.insertAdjacentHTML('afterbegin', TemplateSearch.getFiltersTemplate());
  }
}