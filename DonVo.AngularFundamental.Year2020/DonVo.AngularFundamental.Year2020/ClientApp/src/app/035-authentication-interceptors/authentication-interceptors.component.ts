import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthIntercetorsService } from '../shared/services/auth-interceptors.service';
import { delay, share } from 'rxjs/operators';

@Component({
  selector: 'app-authentication-interceptors',
  templateUrl: './authentication-interceptors.component.html'
})
export class AuthenticationInterceptorsComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = of(false); // initialize the user as 'logged out'

  constructor(public authService: AuthIntercetorsService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn()
      .pipe(
        delay(0), // b/c of : https://blog.angular-university.io/angular-debugging/
        share()
      );
  }

}
