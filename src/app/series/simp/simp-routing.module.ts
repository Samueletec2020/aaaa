import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpPage } from './simp.page';

const routes: Routes = [
  {
    path: '',
    component: SimpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpPageRoutingModule {}
