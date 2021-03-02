import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarEventsService {

  private messageSource = new Subject<string>();
  currentMessage$ = this.messageSource.asObservable();

  constructor() { }

  sendEvent(message: string) {
    this.messageSource.next(message);
  }
}
