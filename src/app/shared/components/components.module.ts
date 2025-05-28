import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { BaseModalComponent } from '../standalones/base-modal/base-modal.component';
import { PokeBoxComponent } from '../standalones/poke-box/poke-box.component';
import { PipesModule } from '../pipes/pipes.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MovePopupComponent } from './move-popup/move-popup.component';
import { StatsComponent } from './move-popup/stats/stats.component';
import { LearnedByComponent } from './move-popup/learned-by/learned-by.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BaseLayoutComponent,
    MovePopupComponent,
    StatsComponent,
    LearnedByComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PipesModule,
    NgbModule,
    PokeBoxComponent,
    BaseModalComponent,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    BaseLayoutComponent,
    MovePopupComponent
  ]
})
export class ComponentsModule { }
