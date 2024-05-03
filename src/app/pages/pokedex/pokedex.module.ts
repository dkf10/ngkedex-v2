import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { pokedexRoutes } from './routes';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokedexRoutes),
    TranslateModule.forChild()
  ]
})
export class PokedexModule { }
