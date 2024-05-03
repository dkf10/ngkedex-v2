import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translateService: TranslateService
  ) { }

  public startUp(): void {
    this.Language = AppConfig.DEFAULT_LANG;
  }

  public set Language(langCode: string) {
    this.translateService.setDefaultLang(langCode);
    this.translateService.use(langCode);
  }
}
