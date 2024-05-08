import { Component } from '@angular/core';
import { ModalSize } from 'src/app/shared/enum/modal-size.enum';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { PokedexService } from '../../services/pokedex/pokedex.service';

@Component({
  selector: 'ngkdx-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent {

  public isModalOpen: boolean = false;
  public selectedPokemon: IPokemon.Pokemon = {} as IPokemon.Pokemon;
  // public displayName: string;
  public spriteLink: string;

  public readonly ModalSize = ModalSize;

  constructor(
    private pokedexService: PokedexService,
    private waiting: WaitingService
  ) { }

  public openModal(pokemon: IPokemon.ListItem): void {
    this.spriteLink = pokemon.sprite_link;
    // this.displayName = pokemon.display_name;
    this.loadPokemonStats(pokemon.id);
    this.isModalOpen = true;
  }

  private async loadPokemonStats(id: number): Promise<void> {
    this.waiting.WaitingEnabled = true;
    this.selectedPokemon = await this.pokedexService.getPokemon(id);
    this.waiting.WaitingEnabled = false;
  }
}
