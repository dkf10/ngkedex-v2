import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: AboutLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
