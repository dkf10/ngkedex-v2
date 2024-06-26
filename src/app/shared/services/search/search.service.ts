import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchTerm$ = new Subject<string>();
  private searchCanvasVisible$ = new Subject<boolean>();
  private searchBtnVisible$ = new Subject<boolean>();

  constructor() { }

  public set searchTerm(value: string) {
    this.searchTerm$.next(value);
  }

  public get searchTerm(): Subject<string> {
    return this.searchTerm$;
  }

  public set searchCanvasVisible(value: boolean) {
    this.searchCanvasVisible$.next(value);
  }

  public get searchCanvasVisible(): Subject<boolean> {
    return this.searchCanvasVisible$;
  }

  public set searchBtnVisible(value: boolean) {
    this.searchBtnVisible$.next(value);
  }

  public get searchBtnVisible(): Subject<boolean> {
    return this.searchBtnVisible$;
  }
}
