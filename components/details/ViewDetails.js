import { TemplateDetails } from './TemplateDetails.js';

export class ViewDetails {
  constructor(subscribe) {
    this.root = document.querySelector('.root');
    subscribe('details-click', this.renderDetails.bind(this));
  }

  addListener(handleDetailsClick) {
    this.btnDetails.addEventListener('click', handleDetailsClick);
  }

  renderDetails(id) {
    console.log(id);
    //this.root.insertAdjacentHTML('beforeend', TemplateDetails.getDetailsTemplate());
    this.root.innerHTML = TemplateDetails.getDetailsTemplate();
  }
}