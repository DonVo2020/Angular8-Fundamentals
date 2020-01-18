import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../models/city.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'city-detail-component',

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

 // // This template is for @Ouput
 // template: `
	//<h2>City details
	//	<button (click)="rate(1)" class="btn btn-sm btn-success">+1</button>
	//	<button (click)="rate(-1)" class="btn btn-sm btn-danger">-1</button>
	//	<button (click)="favorite()" class="btn btn-sm btn-default">favorite</button>
	//	<span [hidden]="!isFavorite">Favorite!</span>
	//</h2>
	//	<ul class="list-group">
	//		<li class="list-group-item">Name: {{ city.name }}</li>
	//		<li class="list-group-item">Province: {{ city.stateOrProvince }}</li>
	//		<li class="list-group-item">Highlights: {{ city.highlights }}</li>
	//	</ul>
	//	<img src="../assets/img/{{ city.name}}.jpg" alt="Photo of {{ city.name }}" class="img-fluid"/>
	//`

// this template is for router-parameter
  template: `<h1>City Detail</h1>
    <h2>Details for city: {{ id }}</h2>
    <h2>Name for city: {{ name }}</h2>

<!--    <div *ngIf="currentCity$ | async as currentCity; else loading">-->
<!--        <h2>Details in front of city: {{ currentCity.name }}</h2>-->
<!--        <ul class="list-group">-->
<!--            <li class="list-group-item">Name: {{ currentCity.name }}</li>-->
<!--            <li class="list-group-item">Province: {{ currentCity.stateOrProvince }}</li>-->
<!--            <li class="list-group-item">Highlights: {{ currentCity.highlights }}</li>-->
<!--        </ul>-->
<!--    </div>-->
<!--    &lt;!&ndash;- Template for loading data-&ndash;&gt;-->
<!--    <ng-template #loading>-->
<!--        <div style="color: red">-->
<!--            <h2>Angular - else templates</h2>-->
<!--            <h3>loading user data...</h3>-->
<!--            <img src="../assets/loading_spinner.gif" alt="loading indicator...">-->
<!--        </div>-->
<!--    </ng-template>-->

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


  id: string;
  name: string;
  currentCity: City;
  private sub: Subscription; // pointer to subscription on Route

  constructor(private route: ActivatedRoute, private cityService: CityService) {
    // Credits: http://blog.thoughtram.io/angular/2016/06/14/routing-in-angular-2-revisited.html
    // ActivatedRoute comes with a 'params' property which is an Observable.
    // To access the property 'id', all we have to do is to subscribe to
    // the parameters Observable changes.
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    // // New - paramMap
    // this.route.paramMap.subscribe((paramObject: any) => {
    //     this.id = paramObject.get('id');
    //     this.name = paramObject.get('name');
    // });

    // OR:
    // Work via Router-snapshot:
    // Sometimes we’re not interested in future changes of a route parameter.
    // All we need the id and once we have it, we can provide the data we want to provide.
    // In this case, an Observable can bit a bit of an overkill.
    // A *snapshot* is simply a static snapshot representation of the activated route.
    // this.id = this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];

    // EXTRA, with fetching details via Service and using switchMap():
    // this.currentCity$ = this.route.params
    //     .pipe(
    //         map(params => params['id']),
    //         switchMap(id => this.cityService.getCity(+id))
    //     )
  }

  ngOnDestroy() {
    // If subscribed, we must unsubscribe before Angular destroys the component.
    // Failure to do so could create a memory leak.
    this.sub.unsubscribe();
  }
}
