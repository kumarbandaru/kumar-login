import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../model/user';
import {AuthinticationService} from '../services/authintication.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];

  constructor(
      private authenticationService: AuthinticationService,
      private userService: UserService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
      this.loadAllUsers();
  }

  deleteUser(id: number) {
      this.userService.delete(id)
          .pipe(first())
          .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
      this.userService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
  }
}
