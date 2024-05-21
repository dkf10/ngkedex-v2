import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, debounceTime, distinctUntilChanged, skip } from 'rxjs';

import { AppConfig } from 'src/app/core/config/app.config';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { MovePopupComponent } from 'src/app/shared/components/move-popup/move-popup.component';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { MovesService } from '../../../../shared/services/moves/moves.service';
import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;
  @ViewChild('moveDetail') public moveDetailPopup: MovePopupComponent;

  public searchTerm: string;
  public movesList: IMove.Item[] = [];
  public rawFilteredList: IGeneral.Result[] = [];
  public showSmallLoader: boolean = false;
  public isSearching: boolean = false;

  private rawList: IGeneral.Paginated;
  private totalCount: number;
  private pageIndex: number = 1;
  private readonly pageSize: number = 30;

  private searchTermSubscription: Subscription;

  constructor(
    private movesService: MovesService,
    private searchService: SearchService,
    private waiting: WaitingService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.initSearchSubscription();
    this.rawList = this.movesService.movesPaginated;
    await this.loadMovesList(this.rawList.results);
    this.waiting.WaitingEnabled = false;
  }

  public ngOnDestroy(): void {
    this.searchTermSubscription.unsubscribe();
  }

  public async onScroll(): Promise<void> {
    // Preventing loading duplicates
    if (this.showSmallLoader) {
      return;
    }

    const nativeElement = this.uiElement.nativeElement

    if (nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight
      && this.movesList.length !== this.totalCount) {
      this.showSmallLoader = true;
      await this.loadMovesList(this.rawList.results);
    }
  }

  public async openMoveDetail(move: IMove.Item, url?: string): Promise<void> {
    if (url) {
      this.waiting.WaitingEnabled = true;
      move = await this.movesService.getMoveDetail(url);
      this.waiting.WaitingEnabled = false;
    }

    this.moveDetailPopup.openModal(move);
  }

  private async loadMovesList(list: IGeneral.Result[]): Promise<void> {
    const startIdx = this.pageSize * (this.pageIndex - 1);
    const endIdx = this.pageSize * this.pageIndex;

    const rawMovesList = await Promise.all(
      list.slice(startIdx, endIdx).map(async (el) => {
        const move = await this.movesService.getMoveDetail(el.url);
        move.name = move.names.find((el) => el.language.name === AppConfig.DEFAULT_LANG).name;
        move.flavor_text = move.flavor_text_entries.find((el) => el.language.name === AppConfig.DEFAULT_LANG).flavor_text;
        move.category_class = move.meta.category.name.replace('+', '-');
        return move;
      })
    );

    this.movesList = this.movesList.concat(rawMovesList);
    this.pageIndex++;
    this.showSmallLoader = false;
  }

  private initSearchSubscription(): void {
    this.searchTermSubscription = this.searchService.searchTerm
      .pipe(skip(1), debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.serachMoves(value);
      });
  }

  private serachMoves(value: string): void {
    if (!value || value.length === 0) {
      this.rawFilteredList = [];
      this.isSearching = false;
      return;
    }

    this.isSearching = true;
    this.rawFilteredList = this.rawList.results.filter((el) => el.name.includes(value));
  }
}
