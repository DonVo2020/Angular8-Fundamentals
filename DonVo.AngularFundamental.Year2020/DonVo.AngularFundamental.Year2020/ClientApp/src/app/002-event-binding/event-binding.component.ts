import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
})
export class EventBindingComponent {

  name = 'Peter Scott';
  cities = [
    new City(1, 'Houston', 'TX'),
    new City(2, 'Boston', 'MA'),
    new City(3, 'Miami', 'FL'),
    new City(4, 'Chicago', 'IL'),
  ];

  addCity(txtCity) {
    // Calculate dummy new ID.
    let newID = this.cities.length + 1;

    // Create new City-object and add it to the array.
    let newCity = new City(newID, txtCity.value, 'Unknown');
    this.cities.push(newCity);
    txtCity.value = '';
  }
}
