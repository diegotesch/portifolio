import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ITime } from '../models/time.interface';
import { TimesService } from './times.service';

@Injectable()
export class TimeResolver implements Resolve<ITime[]> {
  constructor(private timesService: TimesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITime[]> | Promise<ITime[]> | ITime[] {
    const { time } = history.state;
    const { id } = route.params;
    const team_id = id || state.url.split('/')[2];

    if (time) return time;

    return this.timesService.getTime(team_id);
  }
}
