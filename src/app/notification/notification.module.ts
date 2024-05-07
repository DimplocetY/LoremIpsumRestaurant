import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, BrowserModule],
  providers: [NotificationComponent],
  exports: [NotificationComponent],
})
export class NotificationModule {}
