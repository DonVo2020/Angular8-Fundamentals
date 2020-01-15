import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {

  }

  private cities: City[] = [
    new City(1, 'Houston', 'TX'),
    new City(2, 'Boston', 'MA'),
    new City(3, 'Miami', 'FL'),
    new City(4, 'Chicago', 'IL')
  ];

  // return all cities
  getCities(): City[] {
    return this.cities
  }

  // return city based on ID
  getCity(id: number) {
    return this.cities.find(c => c.id === id);

    // another option: using .filter(). If you
    // would expect *multiple* results, and thus want to return an array
    // you would use something like:
    // return this.cities.filter(c => c.id === id)[0]; // In this case: index [0] b/c we only want 1 city
  }

  // return all cities using RXJS
  getCitiesUsingRXJS(): Observable<City[]> {
    return this.http.get<City[]>('assets/data/cities.json');
  }

}
