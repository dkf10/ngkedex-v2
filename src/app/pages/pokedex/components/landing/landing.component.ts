import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { IPokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'ngkdx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {

  @ViewChild('uiElement', { static: false }) public uiElement: ElementRef;
  @ViewChild('pokemonModal', { static: true }) public pokemonModal: PokemonModalComponent;

  public searchTerm: string;
  public pokemonList: IPokemon.ListItem[] = [];
  public showSmallLoader: boolean = false;

  private lastUrl: string;
  private totalCount: number;

  constructor(
    private pokedexService: PokedexService,
    private waiting: WaitingService
  ) { }

  public async ngAfterViewInit(): Promise<void> {
    this.waiting.WaitingEnabled = true;
    await this.loadPokemonList();
    this.waiting.WaitingEnabled = false;
  }

  public async onScroll(): Promise<void> {
    const nativeElement = this.uiElement.nativeElement

    if (nativeElement.clientHeight + Math.round(nativeElement.scrollTop) === nativeElement.scrollHeight
      && this.pokemonList.length !== this.totalCount) {
      this.showSmallLoader = true;
      await this.loadPokemonList(this.lastUrl);
      this.showSmallLoader = false;
    }
  }

  private async loadPokemonList(url?: string): Promise<void> {
    const mainData = await this.pokedexService.getAllPokemon(url);
    this.lastUrl = mainData.next;

    if (this.totalCount === undefined || this.totalCount === null) {
      this.totalCount = mainData.count;
    }

    // Concat pokemon lists and set incremental ids for newly fetched
    mainData.results.forEach(async (el, idx) => {
      const newId = this.pokemonList.length + idx + 1;
      const form = await this.pokedexService.getPokemonForm(newId);

      this.pokemonList.push({
        id: newId,
        display_name: el.name.charAt(0).toUpperCase() + el.name.slice(1),
        sprite_link: form.sprites.front_default,
        ...el
      });
    })
  }
}
