import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenteDeZonaPageRoutingModule } from './gente-de-zona-routing.module';

import { GenteDeZonaPage } from './gente-de-zona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenteDeZonaPageRoutingModule
  ],
  declarations: [GenteDeZonaPage]
})
export class GenteDeZonaPageModule {}
