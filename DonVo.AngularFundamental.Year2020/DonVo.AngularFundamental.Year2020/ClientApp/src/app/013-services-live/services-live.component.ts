import { Component, OnInit } from '@angular/core';
import { MovieService } from "../shared/services/movie.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-services-live',
  templateUrl: './services-live.component.html'
})
export class ServicesLiveComponent  {
  public movies: any; // TODO: Should be typed as MovieModel, or the like.

  constructor(private movieService: MovieService) {

  }

  searchMovies(keyword) {
    this.movieService.searchMovies(keyword)
      .pipe(
        map((movies: any) => movies.Search)
      )
      .subscribe(movieData => {
        this.movies = movieData;				// 1. success handler
      },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting movies complete...')	// 3. complete handler
      )
  }
}
