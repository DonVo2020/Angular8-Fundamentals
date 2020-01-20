import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-aot-compilation',
  templateUrl: './aot-compilation.component.html'
})
export class AoTCompilationComponent implements OnInit {
  title: string = 'Cities with order component';
  cities: City[] = [];
  currentCity: City;

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCitiesAoT()
      .subscribe(
        cityData => this.cities = cityData,
        err => console.log(err),
        () => console.log('Pick up cities completely.')
      )
  }

  showCity(city: City) {
    this.currentCity = city;
  }

  clearCity() {
    this.currentCity = null;
  }

  updateCityRating(rating: number): void {
    this.currentCity.rating += rating;
  }
}
