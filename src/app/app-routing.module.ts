import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainMenu } from './core/enum/routes.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: mainMenu.POKEDEX,
    pathMatch: 'full'
  },
  {
    path: mainMenu.POKEDEX,
    loadChildren: () => import('./pages/pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  {
    path: mainMenu.ABOUT,
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
