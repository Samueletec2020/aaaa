import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShrekPage } from './shrek.page';

const routes: Routes = [
  {
    path: '',
    component: ShrekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShrekPageRoutingModule {}
