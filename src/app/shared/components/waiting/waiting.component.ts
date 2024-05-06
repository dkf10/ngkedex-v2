import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WaitingService } from '../../services/waiting/waiting.service';

@Component({
  selector: 'ngkdx-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit, OnDestroy {
  public showWaiting: boolean;
  private waitingEnableObservable: Subscription;

  constructor(
    private waiting: WaitingService
  ) {
    this.showWaiting = false;
  }

  public ngOnInit(): void {
    this.waitingEnableObservable = this.waiting.WaitingObservable.subscribe((value) =>
      this.showWaiting = value
    );
  }

  public ngOnDestroy(): void {
    this.waitingEnableObservable.unsubscribe();
  }
}
