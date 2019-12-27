import { ModelDetails } from './ModelDetails.js';
import { ViewDetails } from './ViewDetails.js';

export class ControllerDetails {
  constructor({ subscribe }) {
    this.model = new ModelDetails();
    this.view = new ViewDetails(subscribe);
  }
}