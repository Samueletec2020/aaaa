import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiglewinksPageRoutingModule } from './piglewinks-routing.module';

import { PiglewinksPage } from './piglewinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiglewinksPageRoutingModule
  ],
  declarations: [PiglewinksPage]
})
export class PiglewinksPageModule {}
