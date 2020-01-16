import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'city-detail',

  // This template is for @Input
 // template: `
	//<h2>City details</h2>
	//<div *ngIf="city">
	//	<ul class="list-group">
	//		<li class="list-group-item">Name: {{ city.name }}</li>
	//		<li class="list-group-item">Province: {{ city.stateOrProvince }}</li>
	//		<li class="list-group-item">Highlights: {{ city.highlights }}</li>
	//	</ul>
	//	<img src="../assets/img/{{ city.name}}.jpg" alt="Photo of {{ city.name }}" class="img-fluid"/>
	//</div>
	//`

  // This template is for @Ouput
  template: `
	<h2>City details
		<button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
		<button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
		<button (click)="favorite()" class="btn btn-sm btn-default">favorite</button>
		<span [hidden]="!isFavorite">Favorite!</span>
	</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: {{ city.name }}</li>
			<li class="list-group-item">Province: {{ city.stateOrProvince }}</li>
			<li class="list-group-item">Highlights: {{ city.highlights }}</li>
		</ul>
		<img src="../assets/img/{{ city.name}}.jpg" alt="Photo of {{ city.name }}" class="img-fluid"/>
	`
})

export class CityDetailComponent {
  // Input parameter - define `city` as an attribute on this component
  @Input() city: City;
  isFavorite: boolean = true;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();
  @Output() fav: EventEmitter<boolean> = new EventEmitter<boolean>();

  rate(num: number): void {
    console.log('rating for ', this.city.name, ': ', num);
    this.rating.emit(num);
  }

  ngOnChanges(change) {
    // debugger;
    if (this.city) {
      console.log('in Changes: received new city -->', change);
      this.isFavorite = this.city.favorite;
    }
  }

  // City is favorite - or not !
  favorite() {
    this.isFavorite = !this.isFavorite;
    this.fav.emit(this.isFavorite);
  }
}
