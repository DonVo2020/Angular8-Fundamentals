import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',

  //// for router only
  //template: `
  //      <h1>Pick your favorite city</h1>
  //      <!-- Static 'main menu'. Always visible-->
  //      <!-- Add routerLink directive. Angular replaces this with correct <a href="..."> -->
  //      <a routerLink="home" class="btn btn-primary">List of cities</a>
  //      <a routerLink="add" class="btn btn-primary">Add City</a>
  //      <hr>
  //      <!-- Dynamically inject views here -->
  //      <router-outlet></router-outlet>

  //      <!-- Static footer here. Always visible-->
  //      <hr>
  //      Copyright (C) 2020
  //  `

  template: `
			<a routerLink="/component1">Component 1</a> | 
			<a routerLink="/component2">Component 2</a> |
			<a routerLink="/component3">Component 3</a> |
			<a routerLink="/component4">Component 4</a>
			<hr>
			<router-outlet></router-outlet>
		`
})
export class MainComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
