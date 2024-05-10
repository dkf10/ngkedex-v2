import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IEvolution } from 'src/app/shared/interfaces/evolution.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokedexService } from '../../../services/pokedex/pokedex.service';

@Component({
  selector: 'ngkdx-pokemon-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.scss']
})
export class EvolutionsComponent implements OnChanges {

  @Input() public species: IPokemon.Species;
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
      pokemon = await this.pokedexService.getPokemon(this.evolution.chain.species.name);
      this.addElementToDisplayChain(pokemon);
      await this.buildChain(this.evolution.chain.evolves_to);
      return;
    }

    chain.forEach(async (evo) => {
      pokemon = await this.pokedexService.getPokemon(evo.species.name);
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
