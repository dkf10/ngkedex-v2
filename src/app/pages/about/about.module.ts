import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutLandingComponent } from './components/landing/landing.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BaseModalComponent } from 'src/app/shared/standalones/base-modal/base-modal.component';


@NgModule({
  declarations: [
    AboutLandingComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
    BaseModalComponent,
    AboutRoutingModule
  ]
})
export class AboutModule { }
