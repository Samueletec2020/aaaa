import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrsinhosPageRoutingModule } from './ursinhos-routing.module';

import { UrsinhosPage } from './ursinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrsinhosPageRoutingModule
  ],
  declarations: [UrsinhosPage]
})
export class UrsinhosPageModule {}
