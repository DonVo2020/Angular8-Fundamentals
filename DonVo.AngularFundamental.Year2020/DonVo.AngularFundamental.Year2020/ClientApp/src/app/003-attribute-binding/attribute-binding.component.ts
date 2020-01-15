import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styles     : [`
		.cityPhoto {
			max-width : 300px;
			border : 1px solid #333;
			padding : 10px;
			border-radius : 10px;
		}
	`]
})
export class AttributeBindingComponent {
  // Properties
  name: string = 'Peter Scott';
  cities: City[] = [
    new City(1, 'Houston', 'TX'),
    new City(2, 'Boston', 'MA'),
    new City(3, 'Miami', 'FL'),
    new City(4, 'Chicago', 'IL'),
  ];
  textVisible: boolean = true;
  currentCity: City = null;
  cityPhoto: string = '';

  // Update selected city in UI, using ES6 string interpolation
  updateCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }
}
