import { Component, OnInit } from '@angular/core';
import { City } from '../shared/models/city.model';
import { CityService } from "../shared/services/city.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services-http-CRUD',
  templateUrl: './services-http-CRUD.component.html',
  styles: [`.cityPhoto {max-width: 400px}`]
})
    // **************
// Application to edit city data, options to add/delete/edit city via
// package json-server (https://github.com/typicode/json-server)
// For bigger apps a better solution would be to use @ngrx/store, using redux-principles.
// Also, the Delete/Edit buttons should be in their own respective components, instead
// of just buttons on the template.
// *************
export class ServicesHttpCRUDComponent implements OnInit {
  currentCity: City;
  cities: Observable<City[]>;
  cityPhoto: string;
  cityAdded: City;
  isEditing: boolean = false;

  constructor(private cityService: CityService) {
  }

  // 0. Initialize. Fetch all cities
  ngOnInit() {
    // we can use the async pipe here
    this.cities = this.cityService.getCitiesCRUD()
  }

  // 1. Get city by Id
  getCity(city: City): void {
    // Not using the async pipe, because of additional calculations in the .subscribe() block
    this.cityService.getCityCRUD(city.id)
      .subscribe(city => {
        this.currentCity = city;
        this.cityPhoto = `assets/img/${this.currentCity.name}.jpg`;
      })
  }

  // 2. Add a city
  addCity(name: string): void {
    this.cityService.addCityCRUD(name)
      .subscribe(result => {
        this.cityAdded = result;
        this.cities = this.cityService.getCitiesCRUD();
      })
  }

  // 3. Delete a city
  removeCity(city) {
    this.cityService.deleteCityCRUD(city)
      .subscribe(res => {
        this.currentCity = null;
        this.isEditing = false;
        this.cities = this.cityService.getCitiesCRUD();
      })
  }

  // 4. Edit a city & update
  updateCity() {
    this.cityService.updateCityCRUD(this.currentCity)
      .subscribe(res => {
        this.currentCity = res; // should be the same.
        this.isEditing = false;
      })
  }

  cancel() {
    this.isEditing = false;
  }
}
