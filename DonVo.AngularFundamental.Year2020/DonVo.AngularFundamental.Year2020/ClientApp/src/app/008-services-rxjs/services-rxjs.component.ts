import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';
import { CityService } from "../shared/services/city.service";

@Component({
  selector: 'app-services-rxjs',
  templateUrl: './services-rxjs.component.html',
  styles: [`.cityPhoto {max-width: 200px}`]
})
export class ServicesRXJSComponent {
  currentCity: City;
  cities: City[];
  cityPhoto: string;

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCitiesUsingRXJS()
      .subscribe(cityData => {
        this.cities = cityData;
      },
        err => console.log('ERROR: ', err),
        () => console.log('Getting cities complete'));
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }
}
