import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WaitingService } from './shared/services/waiting/waiting.service';

@Component({
  selector: 'ngkdx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {

  public showWaiting: boolean = false;
  private waitingEnableObservable: Subscription;

  constructor(
    private waiting: WaitingService
  ) { }

  public ngOnInit(): void {
    this.waitingEnableObservable = this.waiting.WaitingObservable.subscribe((value) =>
      this.showWaiting = value
    );
  }

  public ngOnDestroy(): void {
    this.waitingEnableObservable.unsubscribe();
  }
}
