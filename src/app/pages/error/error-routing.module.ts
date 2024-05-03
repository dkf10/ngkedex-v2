import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { errorPage } from 'src/app/core/enum/routes.enum';
import { Error401Component } from './components/401/error401.component';
import { Error403Component } from './components/403/error403.component';
import { Error404Component } from './components/404/error404.component';

const routes: Routes = [
  {
    path: errorPage.ERR_401,
    component: Error401Component
  },
  {
    path: errorPage.ERR_403,
    component: Error403Component
  },
  {
    path: errorPage.ERR_404,
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: errorPage.ERR_404
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
