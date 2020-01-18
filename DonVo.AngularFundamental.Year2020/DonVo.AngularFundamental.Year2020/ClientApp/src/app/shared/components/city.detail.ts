import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';

@Component({
  selector: 'city-detail',
  template: `
	<h2>City details
		<button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
		<button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
	</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: {{ city.name }}</li>
			<li class="list-group-item">Province: {{ city.stateOrProvince }}</li>
			<li class="list-group-item">Highlights: {{ city.highlights }}</li>
		</ul>
		<img src="img/{{ city.name}}.jpg" alt="Photo of {{ city.name }}" class="img-responsive"/>
	`
})

export class CityDetail {
  @Input() city: City;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();

  rate(num: number) {
    console.log('rating for ', this.city.name, ': ', num);
    this.rating.emit(num);
  }
}
