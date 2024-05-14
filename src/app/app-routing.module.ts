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
  },
  {
    path: mainMenu.SEARCH,
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
