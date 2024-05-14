import { Component } from '@angular/core';
import { SearchEnum } from '../../enum/search.enum';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  public searchTerm: string;
  public activeFilter: SearchEnum.Filter;
  public readonly filters = SearchEnum.Filter;

  public search(): void {

  }
}
