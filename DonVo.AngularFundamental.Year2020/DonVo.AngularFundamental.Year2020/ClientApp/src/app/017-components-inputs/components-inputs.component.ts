import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-components-inputs',
  templateUrl: './components-inputs.component.html'
})
export class ComponentsInputsComponent implements OnInit  {
  public cities: City[];
  public currentCity: City;

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.getCities();
  }

  getCity(city) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }

  //***********************
  // implementation
  //***********************
  getCities() {
    if (!this.cities) {
      this.cityService.getCitiesUsingRXJS()
        .subscribe(cityData => {
          this.cities = cityData;				// 1. success handler
        },
          err => console.log(err),						// 2. error handler
          () => console.log('Getting cities complete...')	// 3. complete handler
        )
    }
  }
}
