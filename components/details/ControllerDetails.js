import { ViewDetails } from './ViewDetails.js';

export class ControllerDetails {
  constructor({ subscribe }) {
    this.view = new ViewDetails(subscribe);
    subscribe('details-click', this.view.renderDetails.bind(this.view));
  }
}