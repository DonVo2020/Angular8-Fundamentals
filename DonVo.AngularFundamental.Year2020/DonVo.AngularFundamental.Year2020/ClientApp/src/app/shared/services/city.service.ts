import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from '../models/city.model';
import { ApiService } from './api.service';

const API_URL = 'http://localhost:3000/cities';
// Set RequestOptions. In this case only the header.
const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = { headers };

@Injectable()
export class CityService {

  // private variable, acting as cache for cities
  private cityCache: any[];
  private observable: Observable<any>;

  // by using an extra apiService, our CityService doesn't have to know
  // about the Http-backend (or Mock) anymore.
  // This adds a layer of complexity/abstraction, but is also more flexible.
  constructor(private http: HttpClient, private apiService: ApiService) {

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

  // return all cities, mapped to json
  getCitiesObservable(): Observable<City[]> {
    if (this.cityCache) {
      // 1. cities already present. Return Observable to cities.
      return of(this.cityCache);
    } else if (this.observable) {
      // 2. A request is still pending. Return the request object.
      return this.observable;
    } else {
      // 3. No cities in cache. Make a new http call
      this.observable = this.http.get<City[]>('assets/data/cities.json').pipe(
        map(cities => {
          console.log('Fetched cities.json via HTTP-call');
          // 3a. If there is cached data, we no longer need this.observable
          this.observable = null;
          // 3b. Data has arrived, set cache
          this.cityCache = cities;
          return cities;
        }),
        catchError((error: any) => {
          //  3c. Error handling here, because we now use async-pipe.
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

  getCitiesAPI(): Observable<City[]> {
    return this.apiService.getCities();
  }

  getCityAPI(id: number): Observable<City> {
    return this.apiService.getCity(id);
  }

  addCityAPI(newCity: City): Observable<City> {
    return this.apiService.createCity(newCity);
  }

  getCitiesCRUD(): Observable<City[]> {
    return this.http.get<City[]>(API_URL).pipe(
      catchError(err => {
        console.log('Error! Did you forget to start json-server? Run `npm run json-server` to start the server', err);
        return of([]);
      })
    );
  }

  // GET: Return 1 City, based on Id
  getCityCRUD(id: number): Observable<City> {
    return this.http.get<City>(API_URL + `/${id}`);
  }

  // POST: Add a new City
  addCityCRUD(cityName: string): Observable<City> {

    const newCity = new City(null, cityName);

    // Add city via POST request
    return this.http.post<City>(
      API_URL,
      JSON.stringify(newCity),
      API_ARGS
    );
  }

  // DELETE: Delete city from the .json-file (warning: no trash. City is actually removed)
  deleteCityCRUD(city) {
    return this.http.delete(API_URL + `/${city.id}`);
  }

  // PUT : update a current city
  updateCityCRUD(city: City): Observable<City> {
    return this.http.put<City>(
      API_URL + `/${city.id}`,
      JSON.stringify(city),
      API_ARGS
    );
  }

  getCityRouter(id: number): Observable<City> {
    return this.http.get('assets/data/cities.json')
      .pipe(
        map((res: City[]) => {
          return res.find((city: City) => {
            return city.id === id;
          })
        })
      )
  }

}
