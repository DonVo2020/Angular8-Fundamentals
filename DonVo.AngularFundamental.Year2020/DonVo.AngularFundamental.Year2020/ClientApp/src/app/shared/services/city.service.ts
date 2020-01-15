import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city.model';

@Injectable()
export class CityService {

  // private variable, acting as cache for cities
  private cityCache: any[];
  private observable: Observable<any>;

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

  // retourneer alle cities, gemapt naar json
  getCitiesObservable(): Observable<City[]> {
    if (this.cityCache) {
      // 1. cities al aanwezig. Return Observable naar cities.
      return of(this.cityCache);
    } else if (this.observable) {
      // 2. Er is op dit moment nog een request gaande. Return het request-object.
      return this.observable;
    } else {
      // 3. Geen cities in cache. Doe nieuwe http-call
      this.observable = this.http.get<City[]>('assets/data/cities.json').pipe(
        map(cities => {
          console.log('Fetched cities.json via HTTP-call');
          // 3a. Als er cached data is, hebben we this.observable niet meer nodig
          this.observable = null;
          // 3b. Data is binnen, set cache
          this.cityCache = cities;
          return cities;
        }),
        catchError((error: any) => {
          //  3c. Error handling here, omdat we nu async-pipe gebruiken.
          console.log('Error while fetching cities: ', error);
          return of(null);
        })
      );
      return this.observable;
    }
  }

  clearCache() {
    console.log('Cache cleared - cities removed');
    this.cityCache = null;
  }

}
