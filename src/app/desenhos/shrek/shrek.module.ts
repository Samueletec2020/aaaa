import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShrekPageRoutingModule } from './shrek-routing.module';

import { ShrekPage } from './shrek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShrekPageRoutingModule
  ],
  declarations: [ShrekPage]
})
export class ShrekPageModule {}
