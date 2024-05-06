import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaitingService {

  private waitingToggle: Subject<boolean> = new Subject<boolean>();

  public get WaitingObservable(): Subject<boolean> {
    return this.waitingToggle;
  }

  public set WaitingEnabled(value: boolean) {
    this.waitingToggle.next(value);
  }
}
