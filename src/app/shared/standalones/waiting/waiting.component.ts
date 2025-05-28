import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngkdx-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class WaitingComponent {
  @Input() public show: boolean;
}
