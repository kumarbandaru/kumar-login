import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-subjectsent',
  templateUrl: './subjectsent.component.html',
  styleUrls: ['./subjectsent.component.scss']
})
export class SubjectsentComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from subjectsent Component to App Component!');
  }

  clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
  }
  ngOnInit() {
  }

}
