import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TimeResolver } from './services/time.resolver';
import { TimesResolver } from './services/times.resolver';
import { TimesService } from './services/times.service';
import { TimesRoutingModule } from './times-routing.module';
import { TimesComponent } from './times.component';

@NgModule({
  declarations: [TimesComponent],
  imports: [CommonModule, TimesRoutingModule, SharedModule],
  providers: [TimesService, TimesResolver, TimeResolver]
})
export class TimesModule {}
