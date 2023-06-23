import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GenteDeZonaPage } from './gente-de-zona/gente-de-zona.page';
import { GenteDeZonaPageModule } from './gente-de-zona/gente-de-zona.module';
import { Tab1PageModule } from './tab1/tab1.module';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'gente-de-zona',
    component: GenteDeZonaPage
  },
  {path: 'contenido', component: GenteDeZonaPageModule},
   // Ruta comodín para redireccionar a la página principal
   {
    path: '**',
    redirectTo: '/tabs/tab1', // Cambia 'home' por la ruta de tu página principal
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
