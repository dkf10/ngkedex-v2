import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { pokedexRoutes } from './routes';
import { LandingComponent } from './components/landing/landing.component';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MovesComponent } from './components/pokemon/moves/moves.component';
import { EvolutionsComponent } from './components/pokemon/evolutions/evolutions.component';
import { StatsComponent } from './components/pokemon/stats/stats.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovePopupComponent } from './components/pokemon/moves/move-popup/move-popup.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    LandingComponent,
    PokemonModalComponent,
    PokemonComponent,
    MovesComponent,
    EvolutionsComponent,
    StatsComponent,
    MovePopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    PlotlyModule,
    NgbModule,
    RouterModule.forChild(pokedexRoutes),
    TranslateModule.forChild()
  ],
  exports: [
    RouterModule
  ]
})
export class PokedexModule { }
