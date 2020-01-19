import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-custom-preloading',
  templateUrl: './custom-preloading.component.html'
})
export class CustomPreloadingComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    //// Uncomment all below to see more details in Console window.
    //// 1a. subscribing to router events
    // this.router.events.subscribe(event => {
    // 	console.log(event);
    // });
    // //1b. subscribing, using RxJS operators to manipulate the event
    // this.router.events
    // 	.pipe(
    // 		filter(event => event instanceof NavigationStart),
    // 		map(
    // 			(e: NavigationStart) =>
    // 				'started navigiation to url ::' + e.url
    // 		)
    // 	)
    // 	.subscribe(res => console.log(res));
  }
}
