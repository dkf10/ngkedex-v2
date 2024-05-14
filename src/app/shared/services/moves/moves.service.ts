import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, timeout } from 'rxjs';
import { AppConfig } from 'src/app/core/config/app.config';
import { ApiUrl } from 'src/app/core/enum/api-url.enum';
import { IGeneral } from 'src/app/shared/interfaces/general.interface';
import { IMove } from 'src/app/shared/interfaces/move.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public async getAllMoves(url?: string): Promise<IGeneral.Paginated> {
    if (!url) {
      url = `${environment.BASE_URL}${ApiUrl.Move.MOVE}`
    }

    return lastValueFrom(
      this.httpClient.get<IGeneral.Paginated>(url, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getMoveDetail(url: string): Promise<IMove.Item> {
    return lastValueFrom(
      this.httpClient.get<IMove.Item>(`${url}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }
}
