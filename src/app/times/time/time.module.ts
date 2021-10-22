import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [TimeComponent, DashboardComponent],
  imports: [CommonModule, SharedModule, TimeRoutingModule]
})
export class TimeModule {}
