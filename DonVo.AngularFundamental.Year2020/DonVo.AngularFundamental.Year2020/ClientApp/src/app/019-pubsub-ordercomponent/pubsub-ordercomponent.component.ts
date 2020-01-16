import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-pubsub-ordercomponent',
  templateUrl: './pubsub-ordercomponent.component.html'
})
export class PubSubOrderComponent implements OnInit  {
  title: string = 'Cities with order Component and event bus';
  cities: City[] = [];
  currentCity: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService
      .getCitiesUsingRXJS()
      .subscribe(
        cityData => (this.cities = cityData),
        err => console.log(err),
        () => console.log('Fetching cities complete...')
      );
  }

  showCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }

  updateCityRating(rating) {
    this.currentCity.rating += rating;
  }
}
