import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import buildHttpOptions from 'src/app/core/util/build-http-options';
import { FootballParams } from '../models/football-params';
import { ITime } from '../models/time.interface';

const apiParams = new FootballParams('get_teams', { league_id: '99' });
const { endpoint } = apiParams;
@Injectable()
export class TimesService {
  constructor(private http: HttpClient) {}

  getTimes(params?: {}): Observable<ITime[]> {
    if (params) apiParams.setParams(params);

    return this.http
      .get<any[]>(endpoint, buildHttpOptions(apiParams.params))
      .pipe(map(this.prepareTeams));
  }

  private prepareTeams(times: any[]): ITime[] {
    return times.map((time) => {
      const {
        team_key: id,
        team_name: nome,
        team_badge: escudo,
        coaches,
        players: jogadores
      } = time;
      const [{ coach_name: tecnico }] = coaches;
      return { id, nome, escudo, tecnico, jogadores };
    });
  }

  getTime(team_id: string): Observable<ITime[]> {
    apiParams.setParams({ team_id });
    return this.http
      .get<any[]>(endpoint, buildHttpOptions(apiParams.params))
      .pipe(map(this.prepareTeams));
  }
}
