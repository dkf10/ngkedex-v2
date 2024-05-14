import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngkdx-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {

  @Input() public id?: string;
  @Input() public showSearch?: boolean = false;
  @Input() public searchTerm?: string;
  @Output() public onSearch = new EventEmitter<string>();
}
