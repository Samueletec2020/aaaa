import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrsinhosPage } from './ursinhos.page';

const routes: Routes = [
  {
    path: '',
    component: UrsinhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrsinhosPageRoutingModule {}
