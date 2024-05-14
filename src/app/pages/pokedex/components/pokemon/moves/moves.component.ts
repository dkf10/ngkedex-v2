import { Component, Input, ViewChild } from '@angular/core';
import { MovePopupComponent } from 'src/app/shared/components/move-popup/move-popup.component';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'ngkdx-pokemon-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent {
  @ViewChild('moveDetail') public moveDetailPopup: MovePopupComponent;
  @Input() public moves: IPokemon.Move[];
}
