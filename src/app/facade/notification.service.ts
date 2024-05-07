import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly messageSubject$ = new Subject<string | undefined>();

  public messages$() {
    return this.messageSubject$.asObservable();
  }

  public showMessage(message: string): void {
    this.messageSubject$.next(message);
    setTimeout(() => {
      this.messageSubject$.next(undefined);
    }, 5000);
  }

  public clearMessage() {
    this.messageSubject$.next(undefined);
  }
}
