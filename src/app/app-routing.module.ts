import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  },
  {
    path: 'ad-astra',
  },
  {
    path: 'scoob',
    loadChildren: () => import('./filmes/scoob/scoob.module').then( m => m.ScoobPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  
  {
    path: 'piglewinks',
    loadChildren: () => import('./desenhos/piglewinks/piglewinks.module').then( m => m.PiglewinksPageModule)
  },
  {
    path: 'simp',
    loadChildren: () => import('./series/simp/simp.module').then( m => m.SimpPageModule)
  },
  {
    path: 'shrek',
    loadChildren: () => import('./desenhos/shrek/shrek.module').then( m => m.ShrekPageModule)
  },
  
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
