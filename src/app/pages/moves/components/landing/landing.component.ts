import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MovesService } from '../../../../shared/services/moves/moves.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { MovePopupComponent } from 'src/app/shared/components/move-popup/move-popup.component';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { AppConfig } from 'src/app/core/config/app.config';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;
  @ViewChild('moveDetail') public moveDetailPopup: MovePopupComponent;

  public searchTerm: string;
  public movesList: IMove.Item[] = [];
  public showSmallLoader: boolean = false;

  private lastUrl: string;
  private totalCount: number;

  constructor(
    private movesService: MovesService,
    private waiting: WaitingService
  ) { }

  public async ngAfterViewInit(): Promise<void> {
    this.waiting.WaitingEnabled = true;
    await this.loadMovesList();
    this.waiting.WaitingEnabled = false;
  }

  public async onScroll(): Promise<void> {
    const nativeElement = this.uiElement.nativeElement

    if (nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight
      && this.movesList.length !== this.totalCount) {
      this.showSmallLoader = true;
      await this.loadMovesList(this.lastUrl);
      this.showSmallLoader = false;
    }
  }

  private async loadMovesList(url?: string): Promise<void> {
    const mainData = await this.movesService.getAllMoves(url);
    this.lastUrl = mainData.next;

    if (this.totalCount === undefined || this.totalCount === null) {
      this.totalCount = mainData.count;
    }

    let rawMovesList = await Promise.all(
      mainData.results.map(async (el) => {
        const move = await this.movesService.getMoveDetail(el.url);
        move.name = move.names.find((el) => el.language.name === AppConfig.DEFAULT_LANG).name;
        move.flavor_text = move.flavor_text_entries.find((el) => el.language.name === AppConfig.DEFAULT_LANG).flavor_text;
        return move;
      })
    );

    this.movesList = this.movesList.concat(rawMovesList);
  }
}
