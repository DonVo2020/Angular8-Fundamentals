import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Controller for your View. Note the use of @ViewChild
// to get reference to element in the view.
// Another way is to use [(ngModel)], but then you also have to import FormsModule.
@Component({
  selector: 'app-post-restapi',
  templateUrl: './post-restapi.component.html',
  styles: [`.moviePoster {max-height:200px}`]
})
export class PostRestApiComponent  {
  @ViewChild('email', { read: ElementRef, static: false }) email: ElementRef;
  @ViewChild('password', { read: ElementRef, static: false }) password: ElementRef;
  response: any;

  constructor(private http: HttpClient) {
  }

  doLogin() {
    // Post data to reqres.in API.
    // This must be done via a service, but now directly defined in the controller / class.
    // For more info about this API, see http://reqres.in.
    const url = 'https://reqres.in/api/login';

    const email = this.email.nativeElement.value; // retrieve value from text field
    const password = this.password.nativeElement.value; // retrieve value from text field
    const data = {
      email: email,
      password: password
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http
      .post(url, JSON.stringify(data), { headers: headers })
      .subscribe(
        res => (this.response = res),
        err => console.log('ERROR:', err),
        () => console.log('Login complete')
      );
  }
}
