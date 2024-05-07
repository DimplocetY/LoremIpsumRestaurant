import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotificationService } from '../facade/notification.service';

@Component({
  selector: 'homepage-banner',
  templateUrl: './homepage-banner.component.html',
  styleUrls: ['./homepage-banner.component.sass'],
})
export class HomepageBannerComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    pers: new FormControl('', [Validators.required]),
  });
  constructor(protected notificationService: NotificationService) {}

  onSubmit(event?: any): void {
    if (this.form.valid) {
      console.log('Calling API...');
      this.notificationService.showMessage(
        `We hebben je reservatie voor ${this.form.value.pers} personen op ${this.form.value.time} - ${this.form.value.date} goed ontvangen!`
      );
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
