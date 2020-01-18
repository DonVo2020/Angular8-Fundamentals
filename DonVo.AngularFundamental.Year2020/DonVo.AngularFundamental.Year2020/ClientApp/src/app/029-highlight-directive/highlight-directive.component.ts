import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-highlight-directive',
  templateUrl: './highlight-directive.component.html'
})
export class HighlightDirectiveComponent implements OnInit {

  public cities: City[];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    if (!this.cities) {
      this.cityService.getCitiesUsingRXJS()
        .subscribe(cityData => this.cities = cityData);
    }
  }
}
