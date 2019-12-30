export class TemplateDetails {
  static getDetailsCatDogTemplate(animalId) {
    const animal = JSON.parse(localStorage.animalsList).filter(animal => animal.id === animalId)[0];

    const title = animal.species[0].toUpperCase() + animal.species.substring(1) + ' ' + animal.breed;
    const months = Math.floor((Date.now() - new Date(animal.birth_date)) / 2592000000);
    const sterile = (animal.is_sterile) ? 'Sterile' : 'Non-sterile';

    return `<div class="uk-modal-dialog">
          <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
          <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
              <div class="uk-background-cover" style="background-image: url('${animal.image}');" uk-height-viewport></div>
              <div class="uk-padding-large">
                  <h1>${title}</h1>
                  <p class="uk-text-large">
                    <span>Price: $${animal.price}</span><br>
                    <span>Gender: ${animal.gender}</span><br>
                    <span>Weight: ${animal.weight} kg</span><br>
                    <span>Age: ${months} months</span><br>
                    <span>Color: ${animal.color}</span><br>
                    <span>Hair: ${animal.hair}</span><br>
                    <span>${sterile}</span><br>
                  </p>
              </div>
          </div>
      </div>`;
  };

  static getDetailsFishTemplate(animalId) {
    const animal = JSON.parse(localStorage.animalsList).filter(animal => animal.id === animalId)[0];

    const title = animal.species[0].toUpperCase() + animal.species.substring(1) + ' ' + animal.breed;
    const months = Math.floor((Date.now() - new Date(animal.birth_date)) / 2592000000);

    return `<div class="uk-modal-dialog">
          <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
          <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
              <div class="uk-background-cover" style="background-image: url('${animal.image}');" uk-height-viewport></div>
              <div class="uk-padding-large">
                  <h1>${title}</h1>
                  <p class="uk-text-large">
                    <span>Price: $${animal.price}</span><br>
                    <span>Gender: ${animal.gender}</span><br>
                    <span>Weight: ${animal.weight} kg</span><br>
                    <span>Age: ${months} months</span><br>
                    <span>Color: ${animal.color}</span><br>
                    <span>Water type: ${animal.water_type}</span><br>
                    <span>Temper: ${animal.temper}</span><br>
                  </p>
              </div>
          </div>
      </div>`;
  };

  static getDetailsBirdTemplate(animalId) {
    const animal = JSON.parse(localStorage.animalsList).filter(animal => animal.id === animalId)[0];

    const title = animal.species[0].toUpperCase() + animal.species.substring(1) + ' ' + animal.breed;
    const months = Math.floor((Date.now() - new Date(animal.birth_date)) / 2592000000);

    return `<div class="uk-modal-dialog">
          <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
          <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
              <div class="uk-background-cover" style="background-image: url('${animal.image}');" uk-height-viewport></div>
              <div class="uk-padding-large">
                  <h1>${title}</h1>
                  <p class="uk-text-large">
                    <span>Price: $${animal.price}</span><br>
                    <span>Gender: ${animal.gender}</span><br>
                    <span>Weight: ${animal.weight} kg</span><br>
                    <span>Age: ${months} months</span><br>
                    <span>Color: ${animal.color}</span><br>
                    <span>Type: ${animal.type}</span><br>
                    <span>Activity: ${animal.activity}</span><br>
                  </p>
              </div>
          </div>
      </div>`;
  };
}