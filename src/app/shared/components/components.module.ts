import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { WaitingComponent } from './waiting/waiting.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { PokeBoxComponent } from './poke-box/poke-box.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    WaitingComponent,
    BaseModalComponent,
    PokeBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    WaitingComponent,
    BaseModalComponent,
    PokeBoxComponent
  ]
})
export class ComponentsModule { }
