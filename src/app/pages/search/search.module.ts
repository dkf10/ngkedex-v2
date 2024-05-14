import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { SearchRoutingModule } from './search-routing.module';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    TranslateModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
