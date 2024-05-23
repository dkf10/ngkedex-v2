import { Component, Input } from '@angular/core';
import { IMove } from 'src/app/shared/interfaces/move.interface';

@Component({
  selector: 'ngkdx-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  @Input() public selectedMove: IMove.Item;
}
