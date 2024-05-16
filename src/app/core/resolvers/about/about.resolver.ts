import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search/search.service';

export const aboutResolver: ResolveFn<void> = () => {
  const searchService = inject(SearchService);
  searchService.searchBtnVisible = false;
  searchService.searchTerm = '';
};
