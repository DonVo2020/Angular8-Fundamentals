import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';
import { OrderService } from "../services/order.service";

@Component({
  selector: 'city-detail',
  template: `
	<h2>City details
		<button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
		<button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
	</h2>
		<ul class="list-group">
			<li class="list-group-item">Name: {{city.name}}</li>
			<li class="list-group-item">Province: {{city.stateOrProvince}}</li>
			<li class="list-group-item">Highlights: {{city.highlights}}</li>
		</ul>
		<img src="../assets/img/{{ city.name}}.jpg" alt="Photo of {{ city.name }}" class="img-responsive"/>
		<h2>Price for a weekend away: 
		{{ city.price | currency:'USD':true:'1.2' }}
		<button class="btn btn-lg btn-info" 
			(click)="order(city)">Book Now!</button>
		</h2>
	`
})

export class CityDetail {
  @Input() city: City;
  @Output() rating: EventEmitter<number> = new EventEmitter<number>();

  constructor(private orderService: OrderService) {

  }

  // send rating for current city
  rate(num: number) {
    console.log(`Rating for : ${this.city.name}, ${num}`);
    this.rating.emit(num);
  }

  // Order plaatsen. Event emitten voor deze stad.
  // Dit gaan opvangen in city.orders.ts
  order(city: City) {
    console.log(`Booked a city trip for: ${this.city.name}, for USD ${this.city.price}`);
    this.orderService.Stream.next(city);
  }
}
