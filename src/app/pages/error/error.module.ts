import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { Error401Component } from './components/401/error401.component';
import { Error403Component } from './components/403/error403.component';
import { Error404Component } from './components/404/error404.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    Error401Component,
    Error403Component,
    Error404Component
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
    TranslateModule.forChild()
  ]
})
export class ErrorModule { }
