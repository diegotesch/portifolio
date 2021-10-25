import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayersComponent } from './players/players.component';
import { MatchesComponent } from './matches/matches.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ComparationComponent } from './comparation/comparation.component';

@NgModule({
  declarations: [TimeComponent, DashboardComponent, PlayersComponent, MatchesComponent, StatisticComponent, ComparationComponent],
  imports: [CommonModule, SharedModule, TimeRoutingModule]
})
export class TimeModule {}
