import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovesRoutingModule } from './moves-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MovesRoutingModule
  ]
})
export class MovesModule { }
