import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { ITime } from '../models/time.interface';

const ENDPOINT = `${environment.apiFootballUrl}?action=get_teams&league_id=99&APIkey=${environment.apiFootbalToken}`;

@Injectable()
export class TimesService {
  constructor(private http: HttpClient) {}

  getTimes(): Observable<ITime[]> {
    return this.http.get<any[]>(`${ENDPOINT}`).pipe(
      map((res) => {
        return res.map((time) => {
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
      })
    );
  }

  getTime(id: string): Observable<ITime[]> {
    return this.getTimes().pipe(map((res) => res.filter((item) => item.id === id)));
  }
}
