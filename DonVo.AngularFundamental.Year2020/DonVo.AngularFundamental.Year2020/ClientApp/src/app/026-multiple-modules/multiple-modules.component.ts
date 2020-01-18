import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-multiple-modules',
  templateUrl: './multiple-modules.component.html'
})
export class MultipleModulesComponent implements OnInit {

  public cities: City[];
  public currentCity: City;

  constructor(private cityService: CityService) {
    //...any additional initializations
  }

  ngOnInit() {
    this.getCities();
  }

  getCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }

  // increase or decrease rating on Event Emitted
  updateRating(rating: number) {
    this.currentCity.rating += rating;
  }

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
