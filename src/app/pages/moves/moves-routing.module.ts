import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { movesResolver } from 'src/app/core/resolvers/moves/moves.resolver';

const routes: Routes = [
  { path: '', component: LandingComponent, resolve: { rawData: movesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovesRoutingModule { }
