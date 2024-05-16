import { Component, Input, ViewChild } from '@angular/core';
import { MovePopupComponent } from 'src/app/shared/components/move-popup/move-popup.component';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { MovesService } from 'src/app/shared/services/moves/moves.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';

@Component({
  selector: 'ngkdx-pokemon-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent {
  @ViewChild('moveDetail') public moveDetailPopup: MovePopupComponent;
  @Input() public moves: IPokemon.Move[];

  constructor(
    private movesService: MovesService,
    private waiting: WaitingService
  ) { }

  public async openMoveDetail(moveItem: IPokemon.Move): Promise<void> {
    this.waiting.WaitingEnabled = true;
    const move = await this.movesService.getMoveDetail(moveItem.move.url);
    this.moveDetailPopup.openModal(move);
    this.waiting.WaitingEnabled = false;
  }
}
