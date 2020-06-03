import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpPageRoutingModule } from './simp-routing.module';

import { SimpPage } from './simp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpPageRoutingModule
  ],
  declarations: [SimpPage]
})
export class SimpPageModule {}
