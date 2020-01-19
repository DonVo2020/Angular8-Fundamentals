import { Component, OnInit } from '@angular/core';
//import { AuthService } from './services/auth.service';


@Component({
  selector: 'my-app',

  // for router only
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
			<router-outlet></router-outlet>
		`

  //template:
  //  `
  //  <hr>
		//<h3>Pick your favorite city</h3>
		//<!-- Static 'main menu'. Always visible-->
		//<!-- Add routerLink directive. Angular replaces this with correct <a href="..."> -->
		//<a routerLink="/home" class="btn btn-primary">List of cities</a>
  //  	<a routerLink="/add" class="btn btn-primary" 
  //  	        *ngIf="authService.loggedIn()" 
  //  	        routerLinkActive="active">Add City (Authenticate first)</a>
  //      <a (click)="authService.login()" class="btn btn-success" *ngIf="!authService.loggedIn()">Log In</a>
  //      <a (click)="authService.logout()" class="btn btn-success" *ngIf="authService.loggedIn()">Log Out</a>
    
		//<hr>
		//<!-- Dynamically inject views here -->
		//<router-outlet></router-outlet>
		//<!-- Static footer here. Always visible-->
		//`

})
export class MainComponent implements OnInit {
  constructor() {
  }
  ngOnInit() { }
}
