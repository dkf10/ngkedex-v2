import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { mainMenu, pokemonPage } from 'src/app/core/enum/routes.enum';
import { PokedexService } from '../../../../shared/services/pokedex/pokedex.service';
import { PokedexEnum } from '../../enums/pokedex.enum';

@Component({
  selector: 'ngkdx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public selectedPokemon: IPokemon.Pokemon;
  public pokemonSpecies: IPokemon.Species;
  public selectedTab = PokedexEnum.PokemonTabs.STATS;
  public readonly tabs = PokedexEnum.PokemonTabs;

  constructor(
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute,
    private waiting: WaitingService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const pokemonId = parseInt(params['id'], 10);
      this.getPokemonDetail(pokemonId);
    });
  }

  public switchPokemon(pokemon: IPokemon.ListItem): void {
    if (pokemon.id === this.selectedPokemon.id) {
      return;
    }

    this.router.navigate([`${mainMenu.POKEDEX}/${pokemonPage.POKEMON}/${pokemon.id}`]);
  }

  private async getPokemonDetail(id: number): Promise<void> {
    this.waiting.WaitingEnabled = true;
    this.selectedPokemon = await this.pokedexService.getPokemon(id);
    this.pokemonSpecies = await this.pokedexService.getPokemonSpecies(id);
    this.waiting.WaitingEnabled = false;
  }
}
