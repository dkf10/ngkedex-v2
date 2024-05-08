import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';

@Component({
  selector: 'ngkdx-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  public selectedPokemon: IPokemon.Pokemon;
  public displayName: string;

  private pokemonId: number;

  constructor(
    private pokedexService: PokedexService,
    private activatedRoute: ActivatedRoute,
    private waiting: WaitingService
  ) { }

  public ngOnInit(): void {
    this.pokemonId = this.activatedRoute.snapshot.params['id'];
    this.getPokemonDetail();
  }

  private async getPokemonDetail(): Promise<void> {
    this.waiting.WaitingEnabled = true;
    this.selectedPokemon = await this.pokedexService.getPokemon(this.pokemonId);
    this.displayName = this.selectedPokemon.name.charAt(0).toUpperCase() + this.selectedPokemon.name.slice(1);
    this.waiting.WaitingEnabled = false;
  }
}
