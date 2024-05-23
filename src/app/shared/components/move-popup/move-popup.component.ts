import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MovePopupTab } from './enum/move-popup-tab.enum';
import { AppConfig } from 'src/app/core/config/app.config';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { mainMenu, pokemonPage } from 'src/app/core/enum/routes.enum';
import { IPokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'ngkdx-move-popup',
  templateUrl: './move-popup.component.html',
  styleUrls: ['./move-popup.component.scss']
})
export class MovePopupComponent {
  public isMoveDetailOpen: boolean = false;
  public selectedTab: MovePopupTab = MovePopupTab.STATS;
  public selectedMove: IMove.Item;

  public readonly tabs = MovePopupTab;

  constructor(
    private router: Router
  ) { }

  public openModal(moveItem: IMove.Item): void {
    this.isMoveDetailOpen = true;
    this.selectedMove = moveItem;
    this.selectedMove.name = moveItem.names.find((el) => el.language.name === AppConfig.DEFAULT_LANG).name;
    this.selectedMove.flavor_text = moveItem.flavor_text_entries.find((el) => el.language.name === AppConfig.DEFAULT_LANG).flavor_text;
    this.selectedMove.category_class = moveItem.meta.category.name.replace('+', '-');
  }

  public closeModal(): void {
    this.isMoveDetailOpen = false;
    this.selectedMove = null;
    this.selectedTab = MovePopupTab.STATS;
  }

  public goToPokemon(pokemon: IPokemon.ListItem): void {
    this.closeModal();
    this.router.navigate([`${mainMenu.POKEDEX}/${pokemonPage.POKEMON}/${pokemon.id}`]);
  }
}
