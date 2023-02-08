import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { pokedexRoutes } from './routes';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokedexRoutes)
  ]
})
export class PokedexModule { }
