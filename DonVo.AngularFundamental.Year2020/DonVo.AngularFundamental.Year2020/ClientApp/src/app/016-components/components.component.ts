import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
//import { CityDetail1Component } from './city-detail-1.component'; // Insert new component
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html'
})
export class ComponentsComponent implements OnInit  {
  public cities: City[];
  public currentCity: boolean = false;

  constructor(private cityService: CityService) {

  }
  ngOnInit() {
    this.cityService.getCitiesUsingRXJS().subscribe(
      cityData => {
        this.cities = cityData; // 1. success handler
      },
      err => console.log(err), // 2. error handler
      () => console.log('Getting cities complete...') // 3. complete handler
    );
  }

  getCity() {
    this.currentCity = true;
    // later: this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }
}
