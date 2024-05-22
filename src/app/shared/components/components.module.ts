import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WaitingComponent } from './waiting/waiting.component';
import { BaseModalComponent } from './base-modal/base-modal.component';
import { PokeBoxComponent } from './poke-box/poke-box.component';
import { PipesModule } from '../pipes/pipes.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MovePopupComponent } from './move-popup/move-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast-container/toast-container.component';



@NgModule({
  declarations: [
    HeaderComponent,
    WaitingComponent,
    BaseLayoutComponent,
    BaseModalComponent,
    PokeBoxComponent,
    MovePopupComponent,
    ToastContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PipesModule,
    NgbModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    WaitingComponent,
    BaseLayoutComponent,
    BaseModalComponent,
    PokeBoxComponent,
    MovePopupComponent,
    ToastContainerComponent
  ]
})
export class ComponentsModule { }
