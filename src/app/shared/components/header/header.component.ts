import { Component } from '@angular/core';
import { mainMenu } from 'src/app/core/enum/routes.enum';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'ngkdx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly mainMenuRoute = mainMenu;

  constructor(private searchService: SearchService) { }

  public openSearchLayer(): void {
    this.searchService.searchCanvasVisible = true;
  }
}
