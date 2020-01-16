import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-components-outputs',
  templateUrl: './components-outputs.component.html'
})
export class ComponentsOutputsComponent implements OnInit  {
  public cities: City[];
  public currentCity: City;

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCitiesUsingRXJS()
      .subscribe(cityData => {
        this.cities = cityData; // 1. success handler
        // for now: set the property .favorite hardcoded to `false`.
        this.cities.forEach(city => city.favorite = false)
      },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting cities complete...')	// 3. complete handler
      )
  }

  getCity(city) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }

  // increase or decrease rating on Event Emitted
  updateRating(rating: number): void {
    this.currentCity.rating += rating;
  }

  updateFavorite(favorite: boolean): void {
    this.currentCity.favorite = favorite;
  }
}
