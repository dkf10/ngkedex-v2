import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInitService } from './services/app-init/app-init.service';
import { HttpClient } from '@angular/common/http';

const setupInitApp = (appInitService: AppInitService) => {
  return (): void => appInitService.init();
}

const INIT_PROVIDER = provideAppInitializer(() => {
        const initializerFn = (setupInitApp)(inject(AppInitService));
        return initializerFn();
      })

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    INIT_PROVIDER,
    AppInitService
  ]
})
export class CoreModule { }
