import { TemplateDetails } from './TemplateDetails.js';

export class ViewDetails {
  constructor() {
    this.modalWrapper = document.querySelector('.details__wrapper');
  }

  renderDetails({ id, species }) {
    if (species === 'cat' || species === 'dog') {
      this.modalWrapper.innerHTML = TemplateDetails.getDetailsCatDogTemplate(Number(id));
    }
    else if (species === 'bird') {
      this.modalWrapper.innerHTML = TemplateDetails.getDetailsBirdTemplate(Number(id));
    }
    else if (species === 'fish') {
      this.modalWrapper.innerHTML = TemplateDetails.getDetailsFishTemplate(Number(id));
    }
  }
}