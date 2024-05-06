import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaitingService {

  private waitingToggle: Subject<boolean> = new Subject<boolean>();
  private isWaitingEnabled: boolean;

  constructor() { }

  public get WaitingObservable(): Subject<boolean> {
    return this.waitingToggle;
  }

  public get WaitingEnabled(): boolean {
    return this.isWaitingEnabled;
  }

  public set WaitingEnabled(value: boolean) {
    this.isWaitingEnabled = value;
    this.waitingToggle.next(value);
  }
}
