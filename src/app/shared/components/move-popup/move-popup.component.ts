import { Component } from '@angular/core';
import { AppConfig } from 'src/app/core/config/app.config';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { MovesService } from '../../services/moves/moves.service';

@Component({
  selector: 'ngkdx-move-popup',
  templateUrl: './move-popup.component.html',
  styleUrls: ['./move-popup.component.scss']
})
export class MovePopupComponent {

  public isMoveDetailOpen: boolean = false;
  public selectedMove: IMove.Item;

  constructor(
    private movesService: MovesService,
    private waiting: WaitingService
  ) { }

  public openModal(moveItem: IPokemon.Move): void {
    this.isMoveDetailOpen = true;
    this.loadMoveDetail(moveItem.move.url);
  }

  public closeModal(): void {
    this.isMoveDetailOpen = false;
    this.selectedMove = null;
  }

  private async loadMoveDetail(url: string): Promise<void> {
    this.waiting.WaitingEnabled = true;
    this.selectedMove = await this.movesService.getMoveDetail(url);
    this.selectedMove.flavor_text = this.selectedMove.flavor_text_entries.find((el) => el.language.name === AppConfig.DEFAULT_LANG).flavor_text;
    this.waiting.WaitingEnabled = false;
  }
}
