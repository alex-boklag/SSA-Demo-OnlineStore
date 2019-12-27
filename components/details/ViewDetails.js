import { TemplateDetails } from './TemplateDetails.js';

export class ViewDetails {
  constructor() {
    this.modalWrapper = document.querySelector('.modal__wrapper');
  }

  addListener(handleDetailsClick) {
    this.btnDetails.addEventListener('click', handleDetailsClick);
  }

  renderDetails(animalId) {
    this.modalWrapper.innerHTML = TemplateDetails.getDetailsTemplate(animalId);
  }
}