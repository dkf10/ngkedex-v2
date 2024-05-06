import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { WaitingComponent } from './waiting/waiting.component';



@NgModule({
  declarations: [
    HeaderComponent,
    WaitingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent,
    WaitingComponent
  ]
})
export class ComponentsModule { }
