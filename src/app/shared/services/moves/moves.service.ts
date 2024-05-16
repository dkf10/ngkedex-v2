import { HttpClient, HttpParams } from '@angular/common/http';
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

  private _movesPaginated: IGeneral.Paginated;
  private _typesPaginated: IGeneral.Paginated;
  private _categoriesPaginated: IGeneral.Paginated;

  constructor(
    private httpClient: HttpClient
  ) { }

  public get movesPaginated(): IGeneral.Paginated {
    return this._movesPaginated;
  }

  public get typesPaginated(): IGeneral.Paginated {
    return this._typesPaginated;
  }

  public get categoriesPaginated(): IGeneral.Paginated {
    return this._categoriesPaginated;
  }

  public async getAllMoves(limit?: number): Promise<IGeneral.Paginated> {
    let params = new HttpParams();

    if (!isNaN(limit)) {
      params = params.append('offset', 0);
      params = params.append('limit', limit);
    }

    this._movesPaginated = await lastValueFrom(
      this.httpClient.get<IGeneral.Paginated>(`${environment.BASE_URL}${ApiUrl.Move.MOVE}`, { params: params, responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );

    return this._movesPaginated;
  }

  public async getMoveDetail(url: string): Promise<IMove.Item> {
    return lastValueFrom(
      this.httpClient.get<IMove.Item>(`${url}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );
  }

  public async getAllTypes(): Promise<IGeneral.Paginated> {
    this._typesPaginated = await lastValueFrom(
      this.httpClient.get<IMove.Item>(`${environment.BASE_URL}${ApiUrl.Move.TYPE}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );

    return this._typesPaginated;
  }

  public async getAllCategories(): Promise<IGeneral.Paginated> {
    this._categoriesPaginated = await lastValueFrom(
      this.httpClient.get<IMove.Item>(`${environment.BASE_URL}${ApiUrl.Move.CATEGORY}`, { responseType: 'json' })
        .pipe(timeout(AppConfig.DEFAULT_TIMEOUT)), { defaultValue: null }
    );

    return this._categoriesPaginated;
  }
}
