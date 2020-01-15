import { Component, OnInit } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
})
export class SelectionListComponent implements OnInit {
  currentCity: string;
  cityPhoto: string;
  cities: City[];

  ngOnInit() {
    this.cities = [
      new City(1, 'Houston', 'TX'),
      new City(2, 'Boston', 'MA'),
      new City(3, 'Miami', 'FL'),
      new City(4, 'Chicago', 'IL'),
    ];
    this.currentCity = this.cities[0].name;
    this.changeCity();
  }

  changeCity() {
    this.cityPhoto = `assets/img/${this.currentCity}.jpg`;
  }
}
