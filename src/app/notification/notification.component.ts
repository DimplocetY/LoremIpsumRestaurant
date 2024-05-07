import { Component } from '@angular/core';

import { NotificationService } from '../facade/notification.service';

@Component({
  selector: 'notification',
  template: `
    <span
      class="global-notification alert alert-success"
      *ngIf="message$ | async as message"
    >
      <span [innerHTML]="message"></span>
      <button (click)="close()"><i class="fa fa-close"></i></button>
    </span>
  `,
  styleUrls: ['./notification.component.sass'],
})
export class NotificationComponent {
  message$ = this.notificationService.messages$();

  constructor(private readonly notificationService: NotificationService) {}

  close() {
    this.notificationService.clearMessage();
  }
}
