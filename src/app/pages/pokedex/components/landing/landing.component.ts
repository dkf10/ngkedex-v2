import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { mainMenu, pokemonPage } from 'src/app/core/enum/routes.enum';
import { PokedexService } from '../../../../shared/services/pokedex/pokedex.service';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
// import { SearchService } from 'src/app/shared/services/search/search.service';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;

  public searchTerm: string;
  public pokemonList: IPokemon.ListItem[] = [];
  public showSmallLoader: boolean = false;

  private rawList: IGeneral.Paginated;
  // private lastUrl: string;
  private totalCount: number;
  private pageIndex: number = 1;
  private readonly pageSize: number = 20;


  constructor(
    private pokedexService: PokedexService,
    private router: Router,
    private waiting: WaitingService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.rawList = this.pokedexService.pokemonPaginated;
    await this.loadPokemonList(this.rawList.results);
    this.waiting.WaitingEnabled = false;
  }

  public async onScroll(): Promise<void> {
    // Preventing loading duplicates
    if (this.showSmallLoader) {
      return;
    }

    const nativeElement = this.uiElement.nativeElement

    if (
      nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight
      && this.pokemonList.length !== this.totalCount
    ) {
      this.showSmallLoader = true;
      await this.loadPokemonList(this.rawList.results);
    }
  }

  public goToPokemon(pokemon: IPokemon.ListItem): void {
    this.router.navigate([`${mainMenu.POKEDEX}/${pokemonPage.POKEMON}/${pokemon.id}`]);
  }

  private async loadPokemonList(list: IGeneral.Result[]): Promise<void> {
    const startIdx = this.pageSize * (this.pageIndex - 1);
    const endIdx = this.pageSize * this.pageIndex;

    const rawPokemonList = await Promise.all(
      list.slice(startIdx, endIdx).map(async (el, idx) => {
        const newId = this.pokemonList.length + idx + 1;
        const form = await this.pokedexService.getPokemonForm(newId);
        return {
          id: newId,
          sprite_link: form.sprites.front_default,
          ...el
        }
      })
    );

    this.pokemonList = this.pokemonList.concat(rawPokemonList).sort((a, b) => a.id - b.id);
    this.pageIndex++;
    this.showSmallLoader = false;
  }
}
