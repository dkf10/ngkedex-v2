import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { MovesService } from 'src/app/shared/services/moves/moves.service';
import { SearchService } from 'src/app/shared/services/search/search.service';
import { WaitingService } from 'src/app/shared/services/waiting/waiting.service';

export const movesResolver: ResolveFn<IGeneral.Paginated> = async (route, state) => {
  const movesService = inject(MovesService);
  const searchService = inject(SearchService);
  const waiting = inject(WaitingService);

  searchService.searchBtnVisible = true;

  waiting.WaitingEnabled = true;
  const mainData = await movesService.getAllMoves();
  const totalCount = mainData.count;
  const rawList = await movesService.getAllMoves(totalCount);

  return rawList;
};
