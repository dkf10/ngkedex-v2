import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, timeout } from 'rxjs';
import { AppConfig } from 'src/app/core/config/app.config';
import { ApiUrl } from 'src/app/core/enum/api-url.enum';
import { IEvolution } from 'src/app/shared/interfaces/evolution.interface';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public async getAllPokemon(url?: string): Promise<IPokemon.Main> {
    if (!url) {
      url = `${environment.BASE_URL}${ApiUrl.Pokemon.POKEMON}`;
    }

    return lastValueFrom(
      this.httpClient.get<IPokemon.Main>(url, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getPokemon(pokemon: number | string): Promise<IPokemon.Pokemon> {
    return lastValueFrom(
      this.httpClient.get<IPokemon.Form>(`${environment.BASE_URL}${ApiUrl.Pokemon.POKEMON}${pokemon}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getPokemonForm(id: number): Promise<IPokemon.Form> {
    return lastValueFrom(
      this.httpClient.get<IPokemon.Form>(`${environment.BASE_URL}${ApiUrl.Pokemon.FORM}${id}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getPokemonSpecies(name: string): Promise<IPokemon.Species>{
    return lastValueFrom(
      this.httpClient.get<IPokemon.Species>(`${environment.BASE_URL}${ApiUrl.Pokemon.POKEMON_SPECIES}${name}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getEvolutionChain(url: string): Promise<IEvolution.Item> {
    return lastValueFrom(
      this.httpClient.get<IEvolution.Item>(`${url}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getMoveDetail(url: string): Promise<IMove.Item> {
    return lastValueFrom(
      this.httpClient.get<IMove.Item>(`${url}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }
}
