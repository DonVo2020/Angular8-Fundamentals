import { Component, OnInit } from '@angular/core';
import { CityService } from "../shared/services/city.service";
import { City } from '../shared/models/city.model';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html'
})
export class PipesDemoComponent implements OnInit {

  public cities: City[];
  public datePipe: Date = new Date();
  public slicePipe: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  public decimalPipe: number = 91.432197790; // standard 3 decimal points
  public numberPipe: number = 42;
  public currencyPipe: number = 49.95; // Indicate in the HTML which currency code is included
  public jsonPipe: Object = { 'Name': "Peter Scott" };
  public percentPipe: number = 10;
  public filterCity: string = '';

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.cityService.getCitiesUsingRXJS()
      .subscribe(cityData => {
        this.cities = cityData;	// 1. success handler
      },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting cities complete...')	// 3. complete handler
      )
  }
}
