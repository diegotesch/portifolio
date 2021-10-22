import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { groupArrayForLines } from '../core/util/group-array-for-lines';
import { ITime } from './models/time.interface';

@Component({
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent {
  times: Array<ITime[]> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    const { times } = this.activatedRoute.snapshot.data;
    let aux: ITime[] = [];
    this.times = groupArrayForLines(times, 3);
  }
}
