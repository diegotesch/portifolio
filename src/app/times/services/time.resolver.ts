import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ITime } from '../models/time.interface';
import { TimesService } from './times.service';

@Injectable()
export class TimeResolver implements Resolve<ITime[]> {
  constructor(private timesService: TimesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITime[]> | Promise<ITime[]> | ITime[] {
    const { time } = history.state;
    const { id } = route.params;

    if (time) return time;

    console.log(id);
    return this.timesService.getTime(id);
  }
}
