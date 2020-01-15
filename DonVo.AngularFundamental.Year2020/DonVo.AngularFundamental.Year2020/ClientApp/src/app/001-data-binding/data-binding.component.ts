import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  name: string;
  city: string;
  cities: string[];
  citiesStatesModel: City[];

  ngOnInit() {
    this.name = 'Peter Scott';
    this.city = 'Houston';
    this.cities = ['Houston', 'Boston', 'Miami', 'Chicago'];
    this.citiesStatesModel = [
      new City(1, 'Houston', 'TX'),
      new City(2, 'Boston', 'MA'),
      new City(3, 'Miami', 'FL'),
      new City(4, 'Chicago', 'IL'),
    ]
  }
}
