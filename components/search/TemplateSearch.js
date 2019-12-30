export class TemplateSearch {
  static getSearchTemplate() {
    return `<form class="uk-search uk-search-default uk-margin-top uk-width-1-1">
          <span uk-search-icon></span>
          <input class="uk-search-input uk-border-rounded" type="search" placeholder="Search...">
        </form>`;
  }

  static getFiltersTemplate() {
    return `<ul class="filters uk-nav uk-nav-default uk-flex uk-flex-center uk-text-bold">
        <li class="uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="all">ALL</li>
        <li class="uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="cat">CATS</li>
        <li class="uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="dog">DOGS</li>
        <li class="uk-button uk-button-default uk-margin-small-right uk-border-rounded" data-value="fish">FISHES</li>
        <li class="uk-button uk-button-default uk-border-rounded" data-value="bird">BIRDS</li>
        
    </ul>`;
  }
}