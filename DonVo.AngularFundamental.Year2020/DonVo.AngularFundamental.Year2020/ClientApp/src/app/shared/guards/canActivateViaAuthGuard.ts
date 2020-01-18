// An example Guard calling on authentication service to grant user access.
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthService, private route: Router) {
    }

    canActivate() {
        let isLoggedIn = this.authService.isLoggedIn();
        console.log('Is logged in? ', isLoggedIn);
        if (isLoggedIn) {
            return isLoggedIn;
        }
        // user is apparently not logged in. Redirect him to login page
        this.route.navigate(['login']);
    }
}
