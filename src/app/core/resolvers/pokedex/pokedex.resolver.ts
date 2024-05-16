import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search/search.service';

export const pokedexResolver: ResolveFn<boolean> = () => {
  const searchService = inject(SearchService);
  // searchService.searchBtnVisible = (state.url === `/${mainMenu.POKEDEX}`);
  searchService.searchBtnVisible = false;
  searchService.searchTerm = null;
  return of(true);
};
