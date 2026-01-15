import { Component, Input } from '@angular/core';


@Component({
  selector: 'ngkdx-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss'],
  imports: [],
  standalone: true
})
export class WaitingComponent {
  @Input() public show: boolean;
}
