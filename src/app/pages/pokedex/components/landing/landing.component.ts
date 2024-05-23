import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, debounceTime, distinctUntilChanged, skip } from 'rxjs';

import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { mainMenu, pokemonPage } from 'src/app/core/enum/routes.enum';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { PokedexService } from '../../../../shared/services/pokedex/pokedex.service';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;

  public searchTerm: string;
  public pokemonList: IPokemon.ListItem[] = [];
  public searchResultsList: IPokemon.ListItem[] = [];
  public showSmallLoader: boolean = false;
  public isSearching: boolean = false;

  private rawList: IGeneral.Paginated;
  private totalCount: number;
  private pageIndex: number = 1;
  private readonly pageSize: number = 20;

  private searchTermSubscription: Subscription;

  constructor(
    private pokedexService: PokedexService,
    private searchService: SearchService,
    private router: Router,
    private waiting: WaitingService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.initSearchSubscription();
    this.rawList = this.pokedexService.pokemonPaginated;
    await this.loadPokemonList(this.rawList.results);
    this.waiting.WaitingEnabled = false;
  }

  public async ngOnDestroy(): Promise<void> {
    this.searchTermSubscription.unsubscribe();
  }

  public async onScroll(): Promise<void> {
    // Preventing loading duplicates
    if (this.showSmallLoader) {
      return;
    }

    const nativeElement = this.uiElement.nativeElement

    if (
      nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight &&
      this.pokemonList.length !== this.totalCount
    ) {
      this.showSmallLoader = true;
      await this.loadPokemonList(this.rawList.results);
    }
  }

  public goToPokemon(pokemon: IPokemon.ListItem, fromSearch?: boolean): void {
    if (fromSearch) {
      this.searchService.searchCanvasVisible = false;
    }

    this.router.navigate([`${mainMenu.POKEDEX}/${pokemonPage.POKEMON}/${pokemon.id}`]);
  }

  private async loadPokemonList(list: IGeneral.Result[]): Promise<void> {
    const startIdx = this.pageSize * (this.pageIndex - 1);
    const endIdx = this.pageSize * this.pageIndex;

    const rawPokemonList = await this.pokedexService.fetchPokemonList(list.slice(startIdx, endIdx));
    this.pokemonList = this.pokemonList.concat(rawPokemonList).sort((a, b) => a.id - b.id);

    this.pageIndex++;
    this.showSmallLoader = false;
  }

  private initSearchSubscription(): void {
    this.searchTermSubscription = this.searchService.searchTerm
      .pipe(skip(1), debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.searchPokemon(value);
      });
  }

  private async searchPokemon(value: string): Promise<void> {
    if (!value || value.length === 0) {
      this.searchResultsList = [];
      this.isSearching = false;
      return;
    }

    this.isSearching = true;
    this.searchResultsList = await this.pokedexService.fetchPokemonList(this.rawList.results.filter((el) => el.name.includes(value)));
  }
}
