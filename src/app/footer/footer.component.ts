import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NotificationService } from '../facade/notification.service';

@Component({
  selector: 'custom-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(protected notificationService: NotificationService) {}

  onSubmit(event?: any): void {
    if (this.form.valid) {
      console.log('Calling API...');
      this.notificationService.showMessage(
        `Je hebt je ingeschreven voor onze nieuwletter met <i>${this.form.value.email}<i/>`
      );
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
