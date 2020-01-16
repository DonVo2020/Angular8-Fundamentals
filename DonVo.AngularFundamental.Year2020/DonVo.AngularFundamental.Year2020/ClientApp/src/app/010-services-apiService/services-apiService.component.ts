import { Component, OnInit } from '@angular/core';
import { City } from '../shared/models/city.model';
import { CityService } from "../shared/services/city.service";
import { Observable } from 'rxjs';

// Note:  remember to install with command: npm install -g json-server.
//        add this line to environment.ts => apiUrl: 'http://localhost:3000'

@Component({
  selector: 'app-services-apiService',
  templateUrl: './services-apiService.component.html',
  styles: [`.cityPhoto {max-width: 400px}`]
})
export class ServicesAPIComponent implements OnInit {
  currentCity: Observable<City>;
  cities: Observable<City[]>;
  showCityForm: boolean = false;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.getCitiesAPI();
  }

  getCity(id: number) {
    this.currentCity = this.cityService.getCityAPI(id);
  }

  addCity(cityForm) {
    // for now: generate random ID
    const randomId = Math.floor(Math.random() * 1000 + 1);
    const newCity = new City(
      randomId,
      cityForm.name,
      cityForm.province,
      0,
      cityForm.highlights
    );

    this.cityService.addCityAPI(newCity).subscribe(response => {
      console.log(response);
      // fetch newest cities. There should be a better way to do this;
      this.cities = this.cityService.getCitiesAPI(); 
      this.showCityForm = false;
    });
  }

  clear() {
    this.currentCity = null;
  }
}
