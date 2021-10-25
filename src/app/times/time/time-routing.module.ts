import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeResolver } from '../services/time.resolver';
import { ComparationComponent } from './comparation/comparation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TimeComponent } from './time.component';

const routes: Routes = [
  {
    path: '',
    component: TimeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'players',
        component: PlayersComponent,
        resolve: {
          time: TimeResolver
        }
      },
      {
        path: 'matches',
        component: MatchesComponent
      },
      {
        path: 'statistic',
        component: StatisticComponent
      },
      {
        path: 'comparation',
        component: ComparationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule {}
