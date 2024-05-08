import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';
import { pokedexRoutes } from './routes';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    LandingComponent,
    PokemonModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    RouterModule.forChild(pokedexRoutes),
    TranslateModule.forChild()
  ]
})
export class PokedexModule { }
