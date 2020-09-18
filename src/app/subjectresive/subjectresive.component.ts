import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-subjectresive',
  templateUrl: './subjectresive.component.html',
  styleUrls: ['./subjectresive.component.scss']
})
export class SubjectresiveComponent implements OnInit ,OnDestroy{
  messages?: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      // this.subscription = this.messageService.getMessage().subscribe(message => {
      //   if (message) {
      //     this.messages.push(message);
      //   } else {
      //     // clear messages when empty message received
      //     this.messages = [];
      //   }
      // });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
    console.log("meesage array",this.messages,)
  }

}
