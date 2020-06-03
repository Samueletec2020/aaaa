import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiglewinksPage } from './piglewinks.page';

const routes: Routes = [
  {
    path: '',
    component: PiglewinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiglewinksPageRoutingModule {}
