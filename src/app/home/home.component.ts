import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../model/user';
import {AuthinticationService} from '../services/authintication.service';
import {UserService} from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  postId:any;
  constructor(
      private authenticationService: AuthinticationService,
      private userService: UserService,
      private http: HttpClient,
      private messageService:MessageService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }
  send_HomeMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
}
  ngOnInit() {
      this.loadAllUsers();
      const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
const body = { title: 'Angular POST Request Example' }
this.http.post<any>('https://jsonplaceholder.typicode.com/posts', body, { headers }).subscribe(data => {
    this.postId = data.id;
})

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
