import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then((m) => m.ContatoModule)
  },
  {
    path: 'criaturas',
    loadChildren: () => import('./criaturas/criaturas.module').then((m) => m.CriaturasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
