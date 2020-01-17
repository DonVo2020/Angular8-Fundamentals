// example 'authentication service'. For now: always return true
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    isLoggedIn(){
        // return false;
    	return true; // do real authentication here!
	}

}
