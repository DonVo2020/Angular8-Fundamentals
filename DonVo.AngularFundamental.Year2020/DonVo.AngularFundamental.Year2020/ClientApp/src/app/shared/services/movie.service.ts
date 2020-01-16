import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieModel, IMovie } from '../models/movie.model';

@Injectable()
export class MovieService {
  // My private key. Sign up for your own key at www.omdbapi.com
  url: string = 'https://www.omdbapi.com/?apikey=f1f56c8e&';

  // inject HttpClient
  constructor(private http: HttpClient) {

  }

  // Return all movies. Read the documentation on parameters at www.omdbapi.com
  searchMovies(keyword) {
    return this.http.get(this.url + `s=${keyword}`);
  }

  // return all movies
  searchMoviesMapping(keyword): Observable<IMovie[]> {
    return this.http.get(this.url + `s=${keyword}`).pipe(
      map((res: any) => res.Search),
      map((movies: any[]) => {
        // mapping to local Model of Movie.
        // the only fields translated are Title, Year en Poster.
        // They're getting a Dutch name.
        return movies.map(movie => {
          return new MovieModel(movie.Title, movie.Year, movie.Poster);
        });
      })
    );
  }
}
