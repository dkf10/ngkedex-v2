import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { PokedexEnum } from '../../enums/pokedex.enum';

@Component({
  selector: 'ngkdx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public selectedPokemon: IPokemon.Pokemon;
  public selectedTab = PokedexEnum.PokemonTabs.STATS;
  public readonly tabs = PokedexEnum.PokemonTabs;

  constructor(
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute,
    private waiting: WaitingService
  ) { }

  public ngOnInit(): void {
    const pokemonId = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.getPokemonDetail(pokemonId);
  }

  public switchTab(tab: PokedexEnum.PokemonTabs): void {
    this.selectedTab = tab;
  }

  private async getPokemonDetail(id: number): Promise<void> {
    this.waiting.WaitingEnabled = true;
    this.selectedPokemon = await this.pokedexService.getPokemon(id);
    this.waiting.WaitingEnabled = false;
  }
}
