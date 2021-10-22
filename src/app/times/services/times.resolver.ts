import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ITime } from '../models/time.interface';
import { TimesService } from './times.service';

@Injectable()
export class TimesResolver implements Resolve<ITime[]> {
  constructor(private timesService: TimesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITime[]> | Promise<ITime[]> | ITime[] {
    return this.timesService.getTimes();
  }
}
