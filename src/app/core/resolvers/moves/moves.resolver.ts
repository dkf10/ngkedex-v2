import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MovesService } from 'src/app/shared/services/moves/moves.service';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';

export const movesResolver: ResolveFn<void> = async () => {
  const movesService = inject(MovesService);
  const searchService = inject(SearchService);
  const waiting = inject(WaitingService);

  /* Initializing search */
  searchService.searchBtnVisible = true;
  searchService.searchTerm = null;

  /* Loading all paginated data */
  waiting.WaitingEnabled = true;
  const mainData = await movesService.getAllMoves();
  const totalCount = mainData.count;
  await movesService.getAllMoves(totalCount);
  await movesService.getAllTypes();
  await movesService.getAllCategories();
};
