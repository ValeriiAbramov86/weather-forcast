import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchCityComponent } from './pages/search-city/search-city.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCityComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
