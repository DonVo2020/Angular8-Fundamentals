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
import { AuthIntercetorsService } from '../services/auth-interceptors.service';
import { WikipediaService } from '../services/wikipedia.service';
// 2b. guards
import { CanActivateViaAuthGuard } from '../guards/canActivateViaAuthGuard';
import { CanDeactivateGuard } from '../guards/canDeactivateGuard';
import { AuthGuard } from '../guards/auth.guard';
import { AuthInterceptorsGuard } from '../guards/auth-interceptors.guard';

// Interceptors
import { JwtInterceptor } from '../interceptors/jwt.interceptor';
import { ErrorInterceptor } from '../interceptors/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    AuthIntercetorsService,
    OrderService,
    WikipediaService,
    CanActivateViaAuthGuard,
    CanDeactivateGuard,
    AuthGuard,
    AuthInterceptorsGuard,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppServicesModule {
}

