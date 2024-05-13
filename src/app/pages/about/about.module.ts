import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutLandingComponent } from './components/landing/landing.component';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    AboutLandingComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ComponentsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
