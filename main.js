import { PublisherSubscriber } from './share/PublisherSubscriber.js';
import { ControllerSearch } from './components/search/ControllerSearch.js';
import { ControllerAnimals } from './components/animals/ControllerAnimals.js';
import { ControllerDetails } from './components/details/ControllerDetails.js';
import { ControllerCart } from './components/cart/ControllerCart.js';

const ps = new PublisherSubscriber();
const search = new ControllerSearch(ps.api);
const animals = new ControllerAnimals(ps.api);
const details = new ControllerDetails(ps.api);
const cart = new ControllerCart(ps.api);