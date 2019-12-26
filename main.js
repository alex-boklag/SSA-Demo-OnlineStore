import { PublisherSubscriber } from './share/PublisherSubscriber.js';
import { ControllerSearch } from './components/search/ControllerSearch.js';
import { ControllerAnimals } from './components/animals/ControllerAnimals.js';

const ps = new PublisherSubscriber();
const search = new ControllerSearch(ps.api);
const animals = new ControllerAnimals(ps.api);