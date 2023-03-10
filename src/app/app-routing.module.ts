import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {AboutComponent} from './pages/about/about.component';
import {WhatDevComponent} from './pages/what-dev/what-dev.component';
import { StaffComponent } from './pages/staff/staff.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'what-dev', component: WhatDevComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
