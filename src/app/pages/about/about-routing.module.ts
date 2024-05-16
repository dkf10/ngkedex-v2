import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLandingComponent } from './components/landing/landing.component';
import { aboutResolver } from 'src/app/core/resolvers/about/about.resolver';

const routes: Routes = [
  {
    path: '',
    component: AboutLandingComponent,
    resolve: { data: aboutResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
