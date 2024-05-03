import { Injectable } from '@angular/core';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(
    private languageService: LanguageService
  ) { }

  public init(): void {
    this.languageService.startUp();
  }
}
