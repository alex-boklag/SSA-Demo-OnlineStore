export class TemplateSearch {
  static getSearchTemplate() {
    return `<form class="uk-search uk-search-default uk-margin-top uk-width-1-1">
          <span uk-search-icon></span>
          <input class="uk-search-input" type="search" placeholder="Search...">
        </form>`;
  }

  static getFiltersTemplate() {
    return `<ul class="uk-nav uk-nav-default uk-flex uk-flex-around">
        <li data-value="cat">CATS</a></li>
        <li data-value="dog">DOGS</li>
        <li data-value="bird">BIRDS</li>
        <li data-value="fish">FISHES</li>
    </ul>`;
  }
}