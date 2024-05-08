import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, transition, animate, animateChild, query, group } from '@angular/animations';
import { ModalSize } from '../../enum/modal-size.enum';

@Component({
  selector: 'ngkdx-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'opacity(1)',
          opacity: 1,
        })
      ),
      state(
        'close',
        style({
          transform: 'opacity(0)',
          opacity: 0,
        })
      ),
      transition('* <=> *', group([
        animate('250ms ease-in-out'),
        query('@contentAnimate', animateChild())
      ])),
    ]),
    trigger('contentAnimate', [
      state(
        'open',
        style({
          transform: 'translateY(0px)'
        })
      ),
      state(
        'close',
        style({
          transform: 'translateY(50px)'
        })
      ),
      transition('* <=> *', [animate('250ms ease-in-out')])
    ])
  ]
})
export class BaseModalComponent {

  @Input() public id?: string;
  @Input() public isOpen: boolean = false;
  @Input() public title: string;
  @Input() public size = ModalSize.LARGE;

  @Output() public isOpenChange = new EventEmitter<boolean>();

  public closeModal(): void {
    this.isOpenChange.emit(false);
  }
}
