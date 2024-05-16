import { Component, OnDestroy, OnInit } from '@angular/core';
import { mainMenu } from 'src/app/core/enum/routes.enum';
import { SearchService } from '../../services/search/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngkdx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public readonly mainMenuRoute = mainMenu;
  public searchBtnVisible: boolean = false;
  private searchBtnVisibleSubscription: Subscription;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
    this.searchBtnVisibleSubscription = this.searchService.searchBtnVisible.subscribe((value) => this.searchBtnVisible = value);
  }

  public ngOnDestroy(): void {
    this.searchBtnVisibleSubscription.unsubscribe();
  }

  public openSearchLayer(): void {
    this.searchService.searchCanvasVisible = true;
  }
}
