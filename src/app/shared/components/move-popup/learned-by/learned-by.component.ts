import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokedexService } from 'src/app/shared/services/pokedex/pokedex.service';
import { PokeBoxComponent } from '../../../standalones/poke-box/poke-box.component';

@Component({
  selector: 'ngkdx-learned-by',
  templateUrl: './learned-by.component.html',
  styleUrls: ['./learned-by.component.scss'],
  standalone: false
})
export class LearnedByComponent implements OnChanges {

  @Input() public selectedMove: IMove.Item;
  @Output() public clickEvent = new EventEmitter<IPokemon.ListItem>();

  public pokemonList: IPokemon.ListItem[] = [];
  public showWaiter: boolean = false;

  constructor(private pokedexService: PokedexService) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedMove']?.currentValue) {
      this.loadPokemonList();
    }
  }

  private async loadPokemonList(): Promise<void> {
    this.showWaiter = true;
    this.pokemonList = await this.pokedexService.fetchPokemonList(this.selectedMove.learned_by_pokemon);
    this.showWaiter = false;
  }
}
