import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeResolver } from './services/time.resolver';
import { TimesResolver } from './services/times.resolver';
import { TimesComponent } from './times.component';

const routes: Routes = [
  {
    path: '',
    component: TimesComponent,
    resolve: {
      times: TimesResolver
    }
  },
  {
    path: ':id',
    resolve: {
      time: TimeResolver
    },
    loadChildren: () => import('./time/time.module').then((m) => m.TimeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TimesResolver, TimeResolver]
})
export class TimesRoutingModule {}
