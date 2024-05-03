import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInitService } from './services/app-init/app-init.service';
import { HttpClient } from '@angular/common/http';

const setupInitApp = (appInitService: AppInitService) => {
  return (): void => appInitService.init();
}

const INIT_PROVIDER = {
  provide: APP_INITIALIZER,
  useFactory: setupInitApp,
  deps: [AppInitService],
  multi: true
}

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
