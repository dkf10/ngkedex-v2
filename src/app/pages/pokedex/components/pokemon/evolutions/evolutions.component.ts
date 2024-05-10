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
  @Input() public sprite: string;
  public evolution: IEvolution.Item;
  public displayEvolution: IPokemon.ListItem[] = [];
  public isLoading: boolean = true;

  constructor(
    private pokedexService: PokedexService
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['species']?.currentValue) {
      this.loadEvolutionChain();
    }
  }

  private async loadEvolutionChain(): Promise<void> {
    this.isLoading = true;

    this.evolution = await this.pokedexService.getEvolutionChain(this.species.id);
    this.displayEvolution = [{
      id: this.species.id,
      name: this.evolution.chain.species.name,
      sprite_link: this.sprite,
      url: null
    }];

    await this.buildChain(this.evolution.chain.evolves_to);

    this.isLoading = false;
  }

  private async buildChain(chain: IEvolution.Chain[]): Promise<void> {
    chain.forEach(async (evo) => {
      const pokemon = await this.pokedexService.getPokemon(evo.species.name);
      this.displayEvolution.push({
        id: pokemon.id,
        name: pokemon.name,
        sprite_link: pokemon.sprites.front_default,
        url: null
      });

      if (evo.evolves_to?.length > 0) {
        this.buildChain(evo.evolves_to);
      }
    });
  }
}
