import { NgModule, Optional } from '@angular/core';
//import { Http, RequestOptions } from '@angular/http';
//import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { RequestOptions } from 'http';

export function authHttpServiceFactory(http: HttpClient, options: Optional) {
  return new AuthModule();
}

@NgModule({
  providers: [
    {
      provide: AuthModule,
      useFactory: authHttpServiceFactory,
      deps: [HttpClient, Option]
    }
  ]
})
export class AuthModule { }
