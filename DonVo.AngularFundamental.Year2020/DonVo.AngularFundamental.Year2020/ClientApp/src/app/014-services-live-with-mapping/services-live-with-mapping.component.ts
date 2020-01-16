import { Component, OnInit } from '@angular/core';
import { MovieService } from "../shared/services/movie.service";
import { MovieModel } from "../shared/models/movie.model";

@Component({
  selector: 'app-services-live-with-mapping',
  templateUrl: './services-live-with-mapping.component.html',
  styles: [`.moviePoster {max-height:200px}`]
})
export class ServicesLiveWithMappingComponent  {
  public movies: MovieModel[];

  constructor(private movieService: MovieService) {

  }

  searchMoviesMapping(keyword) {
    this.movieService.searchMoviesMapping(keyword)
      .subscribe((movieData: MovieModel[]) => {
        this.movies = movieData;				// 1. success handler, mapped on client-sided Model
      },
        err => console.log(err),						// 2. error handler
        () => console.log('Getting movies complete...')	// 3. complete handler
      )
  }
}
