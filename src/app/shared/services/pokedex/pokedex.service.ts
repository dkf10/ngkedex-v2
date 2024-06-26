import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, timeout } from 'rxjs';
import { AppConfig } from 'src/app/core/config/app.config';
import { ApiUrl } from 'src/app/core/enum/api-url.enum';
import { IEvolution } from 'src/app/shared/interfaces/evolution.interface';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private _pokemonPaginated: IGeneral.Paginated;

  constructor(
    private httpClient: HttpClient
  ) { }

  public get pokemonPaginated(): IGeneral.Paginated {
    return this._pokemonPaginated;
  }

  public async getAllPokemon(limit?: number): Promise<IGeneral.Paginated> {
    let params = new HttpParams();

    if (!isNaN(limit)) {
      params = params.append('offset', 0);
      params = params.append('limit', limit);
    }

    this._pokemonPaginated = await lastValueFrom(
      this.httpClient.get<IGeneral.Paginated>(`${environment.BASE_URL}${ApiUrl.Pokemon.POKEMON}`, { params: params, responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );

    return this._pokemonPaginated;
  }

  public async getPokemon(id: number): Promise<IPokemon.Pokemon> {
    return lastValueFrom(
      this.httpClient.get<IPokemon.Form>(`${environment.BASE_URL}${ApiUrl.Pokemon.POKEMON}${id}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getPokemonForm(id: number): Promise<IPokemon.Form> {
    return lastValueFrom(
      this.httpClient.get<IPokemon.Form>(`${environment.BASE_URL}${ApiUrl.Pokemon.FORM}${id}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getPokemonSpecies(id: number): Promise<IPokemon.Species> {
    return lastValueFrom(
      this.httpClient.get<IPokemon.Species>(`${environment.BASE_URL}${ApiUrl.Pokemon.POKEMON_SPECIES}${id}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getEvolutionChain(url: string): Promise<IEvolution.Item> {
    return lastValueFrom(
      this.httpClient.get<IEvolution.Item>(`${url}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async fetchPokemonList(list: IGeneral.Result[]): Promise<IPokemon.ListItem[]> {
    const output = Promise.allSettled(
      list.map(async (el) => {
        const id = this.extractIdFromUrl(el.url);
        const form = await this.getPokemonForm(id);
        return {
          id: id,
          sprite_link: form.sprites.front_default,
          ...el
        }
      })
    );

    // Creating output array without not found items
    return (await output).map((out) => out['value']).filter((el) => el !== undefined);
  }

  public extractIdFromUrl(url: string): number {
    return parseInt(url.match(/\/(\d+)+[\/]?/g)[0].replace(/\//g, ''), 10);
  }
}
