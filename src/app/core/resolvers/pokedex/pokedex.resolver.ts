import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { mainMenu } from '../../enum/routes.enum';

export const pokedexResolver: ResolveFn<boolean> = (route, state) => {
  const searchService = inject(SearchService);
  searchService.searchBtnVisible = (state.url === `/${mainMenu.POKEDEX}`);
  searchService.searchTerm = null;
  return of(true);
};
