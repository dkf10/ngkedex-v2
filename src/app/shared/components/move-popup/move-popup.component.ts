import { Component } from '@angular/core';
import { AppConfig } from 'src/app/core/config/app.config';
import { IMove } from 'src/app/shared/interfaces/move.interface';

@Component({
  selector: 'ngkdx-move-popup',
  templateUrl: './move-popup.component.html',
  styleUrls: ['./move-popup.component.scss']
})
export class MovePopupComponent {
  public isMoveDetailOpen: boolean = false;
  public selectedMove: IMove.Item;

  public openModal(moveItem: IMove.Item): void {
    this.isMoveDetailOpen = true;
    this.selectedMove = moveItem;
    this.selectedMove.name = moveItem.names.find((el) => el.language.name === AppConfig.DEFAULT_LANG).name;
    this.selectedMove.flavor_text = moveItem.flavor_text_entries.find((el) => el.language.name === AppConfig.DEFAULT_LANG).flavor_text;
  }

  public closeModal(): void {
    this.isMoveDetailOpen = false;
    this.selectedMove = null;
  }
}
