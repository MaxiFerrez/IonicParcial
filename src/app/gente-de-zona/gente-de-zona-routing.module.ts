import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenteDeZonaPage } from './gente-de-zona.page';

const routes: Routes = [
  {
    path: '',
    component: GenteDeZonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenteDeZonaPageRoutingModule {}
