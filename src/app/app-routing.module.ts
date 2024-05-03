import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainMenu } from './core/enum/routes.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  },
  {
    path: mainMenu.POKEDEX,
    loadChildren: () => import('./pages/pokedex/pokedex.module').then(m => m.PokedexModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
