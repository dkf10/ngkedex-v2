import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IEvolution } from 'src/app/shared/interfaces/evolution.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokedexService } from '../../../../../shared/services/pokedex/pokedex.service';

@Component({
  selector: 'ngkdx-pokemon-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnChanges {

  @Input() public species: IPokemon.Species;
  @Output() public onPokeboxClick = new EventEmitter<IPokemon.ListItem>();

  public evolution: IEvolution.Item;
  public displayEvolution: IPokemon.ListItem[] = [];
  public isLoading: boolean = true;

  constructor(private pokedexService: PokedexService) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['species']?.currentValue) {
      this.loadEvolutionChain();
    }
  }

  private async loadEvolutionChain(): Promise<void> {
    this.isLoading = true;
    this.evolution = await this.pokedexService.getEvolutionChain(this.species.evolution_chain.url);
    await this.buildChain();
    this.isLoading = false;
  }

  private async buildChain(chain?: IEvolution.Chain[]): Promise<void> {
    let pokemon: IPokemon.Pokemon = null;

    if (!chain) {
      this.displayEvolution = [];
      const pokemonId = this.pokedexService.extractIdFromUrl(this.evolution.chain.species.url)
      pokemon = await this.pokedexService.getPokemon(pokemonId);
      this.addElementToDisplayChain(pokemon);
      await this.buildChain(this.evolution.chain.evolves_to);
      return;
    }

    chain.forEach(async (evo) => {
      const pokemonId = this.pokedexService.extractIdFromUrl(evo.species.url)
      pokemon = await this.pokedexService.getPokemon(pokemonId);
      this.addElementToDisplayChain(pokemon);

      if (evo.evolves_to?.length > 0) {
        await this.buildChain(evo.evolves_to);
      }
    });
  }

  private addElementToDisplayChain(pokemon: IPokemon.Pokemon): void {
    this.displayEvolution.push({
      id: pokemon.id,
      name: pokemon.name,
      sprite_link: pokemon.sprites.front_default
    });
  }
}
