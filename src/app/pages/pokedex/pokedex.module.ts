import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { PokedexRoutingModule } from './pokedex-routes.module';
import { LandingComponent } from './components/landing/landing.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MovesComponent } from './components/pokemon/moves/moves.component';
import { EvolutionsComponent } from './components/pokemon/evolutions/evolutions.component';
import { StatsComponent } from './components/pokemon/stats/stats.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    LandingComponent,
    PokemonComponent,
    MovesComponent,
    EvolutionsComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    PlotlyModule,
    NgbModule,
    PokedexRoutingModule,
    TranslateModule.forChild()
  ]
})
export class PokedexModule { }
