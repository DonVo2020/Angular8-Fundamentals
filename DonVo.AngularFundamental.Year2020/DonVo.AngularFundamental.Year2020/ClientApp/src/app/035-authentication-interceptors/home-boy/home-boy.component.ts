import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {first} from 'rxjs/operators';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-home-boy',
  templateUrl: './home-boy.component.html'
})
export class HomeBoyComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
     //this.userService.getAll().pipe(first()).subscribe(users => {
     //  this.users = users;
     //});
  }

}
