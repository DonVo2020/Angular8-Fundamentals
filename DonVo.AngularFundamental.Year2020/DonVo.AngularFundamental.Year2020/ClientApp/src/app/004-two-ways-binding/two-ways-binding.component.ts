import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-two-ways-binding',
  templateUrl: './two-ways-binding.component.html',
})
export class TwoWaysBindingComponent {
  newCityExtended: string = '';

  cities: City[] = [
    new City(1, 'Houston', 'TX'),
    new City(2, 'Boston', 'MA'),
    new City(3, 'Miami', 'FL'),
    new City(4, 'Chicago', 'IL'),
  ];

  updateCity(city: City) {
    this.newCityExtended = city.name;
  }
}
