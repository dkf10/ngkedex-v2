import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { mainMenu } from '../../enum/routes.enum';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { PokedexService } from 'src/app/shared/services/pokedex/pokedex.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';

export const pokedexResolver: ResolveFn<void> = async (route, state) => {
  const searchService = inject(SearchService);
  const pokedexService = inject(PokedexService);
  const waiting = inject(WaitingService);

  /* Initializing search */
  searchService.searchBtnVisible = (state.url === `/${mainMenu.POKEDEX}`);
  searchService.searchTerm = null;

  /* Loading all paginated data */
  waiting.WaitingEnabled = true;
  await pokedexService.getAllGenerations();
  const mainData = await pokedexService.getAllPokemon();
  const totalCount = mainData.count;
  await pokedexService.getAllPokemon(totalCount);

  waiting.WaitingEnabled = true;
};
