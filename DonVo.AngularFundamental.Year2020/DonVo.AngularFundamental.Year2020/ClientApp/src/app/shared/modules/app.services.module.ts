// Services in its own module - now imported in main module app.module.ts

// 1. Import NgModule stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 2a.  services
import { ApiService } from '../services/api.service';
import { CityService } from '../services/city.service';
import { MovieService } from '../services/movie.service';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { WikipediaService } from '../services/wikipedia.service';
// 2b. guards
import { CanActivateViaAuthGuard } from '../guards/canActivateViaAuthGuard';
import { CanDeactivateGuard } from '../guards/canDeactivateGuard';
import { AuthGuard } from '../guards/auth.guard';

export function guardFunction() {
  console.log("Route requested");
  return true; // do validation or other stuff here
}

// 3. Declare module. Import and Export CommonModule, decorated with providers: [...] array
@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule
  ],
  providers: [
    ApiService,
    CityService,
    {
      provide: 'CanAlwaysActivateGuard',	// Guard as a function
      useValue: guardFunction
    },
    AuthService,
    {
      provide: 'CanAlwaysActivateGuard', // Guard as a function
      useValue: guardFunction
    },
    { provide: MovieService, useClass: MovieService },
    OrderService,
    WikipediaService,
    CanActivateViaAuthGuard,
    CanDeactivateGuard,
    AuthGuard,
  ]
})
export class AppServicesModule {
}

