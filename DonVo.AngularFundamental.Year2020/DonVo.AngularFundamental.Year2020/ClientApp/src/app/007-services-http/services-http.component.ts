import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';
import { CityService } from "../shared/services/city.service";

@Component({
  selector: 'app-services-http',
  templateUrl: './services-http.component.html',
  styles: [`.cityPhoto {max-width: 200px}`]
})
export class ServicesHttpComponent {
  currentCity: City;
  cities: City[];
  cityPhoto: string;

  // Inject instance of CityService
  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cityService.getCitiesUsingRXJS()
      .subscribe(cityData => {						// 1. success handler
        this.cities = cityData
      },
        err => console.log('ERROR: ', err),			// 2. error handler
        () => console.log('Getting cities complete'));	// 3. complete handler
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }
}
