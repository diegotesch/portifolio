import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/base/base.component';
import { groupArrayForLines } from '../../core/util/group-array-for-lines';
import { IJogador } from '../models/jogador.interface';
import { ITime } from '../models/time.interface';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent extends BaseComponent implements OnInit {
  time: ITime | null = null;

  jogadores: Array<IJogador[]> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    super();
    const { time } = this.activatedRoute.snapshot.data;
    this.time = { ...time[0] };
  }

  ngOnInit(): void {
    if (this.time) {
      this.jogadores = groupArrayForLines(this.time.jogadores, 3);
    }
  }
}
