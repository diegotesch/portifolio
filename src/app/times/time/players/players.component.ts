import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { groupArrayForLines } from '../../../core/util/group-array-for-lines';
import { IJogador } from '../../models/jogador.interface';
import { ITime } from '../../models/time.interface';

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  time: ITime | null = null;

  jogadores: Array<IJogador[]> = [];

  constructor(private activatedRoute: ActivatedRoute) {
    const { time } = this.activatedRoute.snapshot.data;
    this.time = { ...time[0] };
  }

  ngOnInit(): void {
    if (this.time) {
      this.jogadores = groupArrayForLines(this.time.jogadores, 3);
    }
  }
}
