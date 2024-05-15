import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovesService } from '../../../../shared/services/moves/moves.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { MovePopupComponent } from 'src/app/shared/components/move-popup/move-popup.component';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { AppConfig } from 'src/app/core/config/app.config';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;
  @ViewChild('moveDetail') public moveDetailPopup: MovePopupComponent;

  public searchTerm: string;
  public movesList: IMove.Item[] = [];
  public showSmallLoader: boolean = false;

  private rawList: IGeneral.Paginated;
  private totalCount: number;
  private pageIndex: number = 1;
  private readonly pageSize: number = 30;

  constructor(
    private movesService: MovesService,
    private activatedRoute: ActivatedRoute,
    private waiting: WaitingService
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.data.subscribe(async (data) => {
      this.rawList = data['rawData'];
      await this.loadMovesList(this.rawList.results)
      this.waiting.WaitingEnabled = false;
    });
  }

  public async onScroll(): Promise<void> {
    const nativeElement = this.uiElement.nativeElement

    if (nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight
      && this.movesList.length !== this.totalCount) {
      this.showSmallLoader = true;
      await this.loadMovesList(this.rawList.results);
      this.showSmallLoader = false;
    }
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
  }
}
