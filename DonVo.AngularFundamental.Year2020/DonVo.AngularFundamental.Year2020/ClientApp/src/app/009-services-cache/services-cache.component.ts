import { Component } from '@angular/core';
import { City } from '../shared/models/city.model';
import { CityService } from "../shared/services/city.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services-cache',
  templateUrl: './services-cache.component.html',
  styles: [`.cityPhoto {max-width: 400px}`]
})
export class ServicesCacheComponent {
  currentCity: City;
  cities: Observable<City[]>;
  cityPhoto: string;

  constructor(private cityService: CityService) { }

  ngOnInit() { }

  loadCities() {
    this.cities = this.cityService.getCitiesObservable();
  }

  getCity(city: City) {
    this.currentCity = city;
    this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
  }

  clear() {
    this.cities = null;
  }
  clearCache() {
    this.cityService.clearCache();
  }
}
